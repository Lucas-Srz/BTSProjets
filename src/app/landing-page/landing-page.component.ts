import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  nom: string = '';
  mot_de_passe: string = '';
  showPassword: boolean = false;

  messageAdmin: string = '';
  afficherTexteNew: boolean = false;
  afficherTexteConnexion: boolean = false;

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) {}

  // Affichage du mot de passe
    togglePassword() {
      this.showPassword = !this.showPassword;
    }

  // Récupere les données des comptes pour Admin
    sendAdmin() {
      console.log('Bouton "Connexion Admin" appuyer !');
      console.log("front : ",this.nom);

      this.authService.admin(this.nom,this.mot_de_passe).subscribe(
        (response: any) => {
          if (response.auth) {
            // Redirect to home page
              this.router.navigateByUrl('/connexion');
            console.log("Identifiants valides !");
            console.log('- - - - - - - - - -');
            //this.message = 'Identifiants valides !';
          } else {
            console.log("Identifiants non-valides...");
            console.log('- - - - - - - - - -');
            this.messageAdmin = 'Identifiants non-valides';
            //Conteur pour le message d'erreurs
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
          this.messageAdmin = 'Une erreur est survenue lors du traitement de votre requête';
        }
      );  
    }
}
