const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./db');
const { resolveTripleslashReference } = require('typescript');
const jwt = require('jsonwebtoken'); //Module token

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connexion du compte Admin
  app.post('/connexionadmin', (req, res) => { 
    console.log("Server : ",req.body); 
    const login = req.body.login;
    const motDePasse = req.body.password;
    connection.query('SELECT * FROM `table_login` WHERE nom = ? AND mot_de_passe = ? AND nom = "admin" AND mot_de_passe = "admin" ', 
    [login, motDePasse], (error, results, fields) => {
      if (error) throw error;
      if (results.length == 1) {
        const token = jwt.sign({ username: login}, 'secret', { expiresIn: '1h' });
        res.status(201).json({ auth: true, token: token });
      } else {      
        res.status(201).json({ auth: false });
      }
    });
  });

//- - - - - - - - - - - - - - - 



// Création d'un compte
  app.post('/cree', (req, res) => {
    console.log("Server : ",req.body); 
    const login = req.body.login;
    const prenom = req.body.prenom;
    const motDePasse = req.body.password;
    
    if(login === "" || prenom === "" || motDePasse === ""){
      console.log("Impossible de créer un compte avec aucun nom, prenom, mdp !");
      res.status(201).json({ auth: false }); // renvoyer un code de statut 409 conflict
    }else{
      // Vérifier si le compte existe déjà
      connection.query('SELECT * FROM table_login WHERE nom = ?', [login], (error, results, fields) => {
        if (error) throw error;
        if (results.length > 0) {
          console.log("Ce compte existe déjà !");
          res.status(201).json({ auth: false }); // renvoyer un code de statut 409 conflict
        } else {
          // Créer le compte
          connection.query('INSERT INTO table_login (nom, prenom, mot_de_passe) VALUES (?, ?, ?)', [login, prenom, motDePasse], (error, results, fields) => {
            if (error) {
              console.log(error);
              res.status(500).json({ auth: false }); // renvoyer un code de statut 500 erreur serveur
            } else {
              console.log('Compte créé avec succès !');
              res.status(201).json({ auth: true }); // renvoyer un code de statut 201 créé avec succès
            }
          });
        }
      });
    }
  });

//- - - - - - - - - - - - - - - 



// Connexion d'un compte
  app.post('/connexion', (req, res) => { 
    console.log("Server : ",req.body); 
    const login = req.body.login;
    const motDePasse = req.body.password;
    
    // Teste si le compte existe
    connection.query('SELECT prenom FROM table_login WHERE nom = ? AND mot_de_passe = ?', [login, motDePasse], (error, results, fields) => {
      if (error) throw error;
      if (results.length == 0) {      
        res.status(201).json({ auth: false, message: "Compte inexistant" });
      } else if (login === "admin" && motDePasse === "admin") {
        res.status(201).json({ auth: false, message: "Connexion au compte admin interdite" });
      } else {      
        //res.status(201).json({ auth: true });
        res.status(201).json({ auth: true, prenom: results[0].prenom });
      }
    });
  });

//- - - - - - - - - - - - - - - 

 

// Réseption des valeurs pour les utilisées dans les graphiques
  app.use('/AffGraph', (req, res) => { 
    console.log("- - - /AffGraph - - -");
    const data = req.body;
    //console.log("Données reçues du client :", data);

    const graphData = data.graph.map(item => item);
    console.log("Affichage des checkbox : ", graphData);
    console.log("- - - - - - - - - -");

    const jsonResponse = {};

    if(graphData[0] == true) {
      //console.log("Donnée server temperature !");
      //console.log("Données reçues du client :", data);
      connection.query('SELECT temperature, date, heure FROM diag_in_test_lemcom_default_id WHERE num_pompe = ? AND date BETWEEN ? AND ? ORDER BY date, heure;', 
      [data.npompe, data.dates1, data.dates2], (error, results, fields) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error retrieving data from database');
          console.log("Pas envoyé...");
        } else {
          jsonResponse.results1 = results;
          //console.log("R1 : " + JSON.stringify(jsonResponse.results1));

          console.log("Donnée temperature : Envoyé !");
        }
      });
    }
    if(graphData[1] == true) {
      //console.log("Donnée server SF !");
      //console.log("Données reçues du client :", data);
      connection.query('SELECT CPT_CMD_SF, date, heure FROM diag_in_test_lemcom_default_id WHERE num_pompe = ? AND date BETWEEN ? AND ? ORDER BY date, heure;', 
      [data.npompe, data.dates1, data.dates2], (error, results, fields) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error retrieving data from database');
          console.log("Pas envoyé...");
        } else {
          jsonResponse.results2 = results;
          //console.log("R2 : " + JSON.stringify(jsonResponse.results2));

          console.log("Donné SF : Envoyé !");
        }
      });
    }
    if(graphData[2] == true) {
      //console.log("Donnée server PPIECE !");
      //console.log("Données reçues du client :", data);
      connection.query('SELECT CPT_PPIECE, date, heure FROM diag_in_test_lemcom_default_id WHERE num_pompe = ? AND date BETWEEN ? AND ? ORDER BY date, heure;', 
      [data.npompe, data.dates1, data.dates2], (error, results, fields) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error retrieving data from database');
          console.log("Pas envoyé...");
        } else {
          jsonResponse.results3 = results;
          //console.log("R3 : " + JSON.stringify(jsonResponse.results3));

          console.log("Donné PPIECE : Envoyé !");
        }
      });
    }
    if(graphData[3] == true) {
      //console.log("Donnée server DEF_PPIECE !");
      //console.log("Données reçues du client :", data);
      connection.query('SELECT CPT_DEF_PPIECE, date, heure FROM diag_in_test_lemcom_default_id WHERE num_pompe = ? AND date BETWEEN ? AND ? ORDER BY date, heure;', 
      [data.npompe, data.dates1, data.dates2], (error, results, fields) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error retrieving data from database');
          console.log("Pas envoyé...");
        } else {
          jsonResponse.results4 = results;
          //console.log("R4 : " + JSON.stringify(jsonResponse.results4));

          console.log("Donné DEF_PPIECE : Envoyé !");
        }
      });
    }
    if(graphData[4] == true) {
      //console.log("Donnée server CPT_REGUL_ASC !");
      //console.log("Données reçues du client :", data);
      connection.query('SELECT CPT_REGUL_ASC, date, heure FROM diag_in_test_lemcom_default_id WHERE num_pompe = ? AND date BETWEEN ? AND ? ORDER BY date, heure;', 
      [data.npompe, data.dates1, data.dates2], (error, results, fields) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error retrieving data from database');
          console.log("Pas envoyé...");
        } else {
          jsonResponse.results5 = results;
          //console.log("R5 : " + JSON.stringify(jsonResponse.results5));

          console.log("Donné CPT_REGUL_ASC : Envoyé !");
        }
      });
    }
    if(graphData[5] == true) {
      //console.log("Donnée server CPT_DEF_REGUL !");
      //console.log("Données reçues du client :", data);
      connection.query('SELECT CPT_DEF_REGUL, date, heure FROM diag_in_test_lemcom_default_id WHERE num_pompe = ? AND date BETWEEN ? AND ? ORDER BY date, heure;', 
      [data.npompe, data.dates1, data.dates2], (error, results, fields) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error retrieving data from database');
          console.log("Pas envoyé...");
        } else {
          jsonResponse.results6 = results;
          //console.log("R6 : " + JSON.stringify(jsonResponse.results6));

          console.log("Donné CPT_DEF_REGUL : Envoyé !");
        }
      });
    }
    if(graphData[6] == true) {
      //console.log("Donnée server CPT_CMD_INT_VD !");
      //console.log("Données reçues du client :", data);
      connection.query('SELECT CPT_CMD_INT_VD, date, heure FROM diag_in_test_lemcom_default_id WHERE num_pompe = ? AND date BETWEEN ? AND ? ORDER BY date, heure;', 
      [data.npompe, data.dates1, data.dates2], (error, results, fields) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error retrieving data from database');
          console.log("Pas envoyé...");
        } else {
          jsonResponse.results7 = results;
          //console.log("R7 : " + JSON.stringify(jsonResponse.results7));

          console.log("Donné CPT_CMD_INT_VD : Envoyé !");
        }
      });
    }
    if(graphData[7] == true) {
      //console.log("Donnée server CPT_CMD_EXT_VD !");
      //console.log("Données reçues du client :", data);
      connection.query('SELECT CPT_CMD_EXT_VD, date, heure FROM diag_in_test_lemcom_default_id WHERE num_pompe = ? AND date BETWEEN ? AND ? ORDER BY date, heure;', 
      [data.npompe, data.dates1, data.dates2], (error, results, fields) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error retrieving data from database');
          console.log("Pas envoyé...");
        } else {
          jsonResponse.results8 = results;
          //console.log("R8 : " + JSON.stringify(jsonResponse.results8));

          console.log("Donné CPT_CMD_EXT_VD : Envoyé !");
        }
      });
    }
    if(graphData[8] == true) {
      //console.log("Donnée server CPT_DEF_ALIM !");
      //console.log("Données reçues du client :", data);
      connection.query('SELECT CPT_DEF_ALIM, date, heure FROM diag_in_test_lemcom_default_id WHERE num_pompe = ? AND date BETWEEN ? AND ? ORDER BY date, heure;', 
      [data.npompe, data.dates1, data.dates2], (error, results, fields) => {
        if (error) {
          console.error(error);
          res.status(500).send('Error retrieving data from database');
          console.log("Pas envoyé...");
        } else {
          jsonResponse.results9 = results;
          //console.log("R9 : " + JSON.stringify(jsonResponse.results9));

          console.log("Donné CPT_DEF_ALIM : Envoyé !");
        }
      });
    }
    
    setTimeout(() => {
      console.log('- - - - - 2s - - - - - ')
      //console.log("RES : " + JSON.stringify(jsonResponse))
      res.json(jsonResponse);
   }, 2000);

  });

//- - - - - - - - - - - - - - -


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
