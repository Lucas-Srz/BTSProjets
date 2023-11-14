import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  nom: string = '';
  prenom: string= '';
  mot_de_passe: string = '';
  showPassword: boolean = false;

  messageCree: string = '';
  messageConnexion: string = '';
  afficherTexteNew: boolean = false;
  afficherTexteConnexion: boolean = false;

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {}

  // Affichage du mot de passe
    togglePassword() {
      this.showPassword = !this.showPassword;
    }

  // Créer un compte
    retrieve() {
      console.log('Bouton "Crée un compte" appuyer !');
    
      this.authService.cree(this.nom,this.prenom,this.mot_de_passe).subscribe(
        (response: any) => {    
          if (response.auth) {
            console.log("Compte créé !");
            console.log('- - - - - - - - - -');
            this.messageCree = 'Compte créé !';
            setTimeout(() => {
              this.afficherTexteNew = true;
              setTimeout(() => {
                this.afficherTexteNew = false;
              }, 5000);
            }, 1000);
          } else {
            console.log("Compte déja crée !");
            console.log('- - - - - - - - - -');
            this.messageCree = 'Erreur : Tout les champs doivent etre remplie OU le compte est déja crée !';     
            setTimeout(() => {
              this.afficherTexteNew = true;
              setTimeout(() => {
                this.afficherTexteNew = false;
              }, 5000);
            }, 1000);
          }
        },
        (error) => {
          console.log(error);
          this.messageCree = 'Une erreur est survenue lors du traitement de votre requête';
        }
      );
    }

  // Récupere les données des comptes
    send() {
      
      console.log('Bouton "Connexion" appuyer !');
      console.log("front : ",this.nom);

      this.authService.connexion(this.nom,this.mot_de_passe).subscribe(
        (response: any) => {
          if (response.auth) {
            // Redirection vers la page 'outildemaintenance'
            this.authService.DonneeNom = this.nom;
            this.authService.DonneePrenom = response.prenom;
            this.router.navigateByUrl('/outildemaintenance');
            console.log("Identifiants valides !");
            console.log('- - - - - - - - - -');
            //this.message = 'Identifiants valides !';
          } else {
            //Compte mauvais donc erreur
              console.log("Identifiants non-valides");
              console.log('- - - - - - - - - -');
              this.messageConnexion = 'Identifiants non-valides';
              setTimeout(() => {
                this.afficherTexteConnexion = true;
                setTimeout(() => {
                  this.afficherTexteConnexion = false;
                }, 5000);
              }, 1000);
          }
        },
        (error) => {
          console.log(error);
          this.messageConnexion = 'Une erreur est survenue lors du traitement de votre requête';
        }
      );  
    }

  //Déconnection
    logout() {
      this.authService.logout();
      this.router.navigate(['/acceuil']);
    }

}
