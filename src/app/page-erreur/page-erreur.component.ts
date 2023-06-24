import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-erreur',
  templateUrl: './page-erreur.component.html',
  styleUrls: ['./page-erreur.component.scss']
})
export class PageErreurComponent {

  constructor(private router: Router) {}

  // Récupere les données des comptes pour Admin
    retourAcceuil() {
      console.log('Retour à la page d acceuil');
      this.router.navigateByUrl('/');
    }
}
