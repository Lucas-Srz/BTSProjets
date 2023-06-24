const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',    // PhpMyAdmin => Nom du serveur
  user: 'root',         // PhpMyAdmin => Nom d'utilisateur
  password: '',         // PhpMyAdmin => Mot de passe pour la connexion
  database: 'projet'    // PhpMyAdmin => Nom de base
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});

module.exports = connection;
