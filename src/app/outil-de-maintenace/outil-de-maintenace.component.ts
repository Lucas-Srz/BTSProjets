import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataODM } from '../models/dataOdm.model';

@Component({
  selector: 'app-outil-de-maintenace',
  templateUrl: './outil-de-maintenace.component.html',
  styleUrls: ['./outil-de-maintenace.component.scss']
})
export class OutilDeMaintenaceComponent{
  graphData: DataODM = new DataODM();

  pompe = '';
  date1 = '';
  date2 = '';

  graph1 = '';
  graph2 = '';
  graph3 = '';
  graph4 = '';
  graph5 = '';
  graph6 = '';
  graph7 = '';
  graph8 = '';
  graph9 = '';
  
  selectAll = false;

  showComponent = false;

  
  
  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  //Afficher nom / prenom
    get donneeNom(): string {
      return this.authService.DonneeNom;
    }

    get donneePrenom(): string {
      return this.authService.DonneePrenom;
    }
  
  //btn " Afficher les graphiques "
    sendGraph() {
      this.showComponent = false;
      const donnGraph = {
        npompe: this.pompe,
        dates1: this.date1,
        dates2: this.date2,
        graph: [
          this.graph1,
          this.graph2,
          this.graph3,
          this.graph4,
          this.graph5,
          this.graph6,
          this.graph7,
          this.graph8,
          this.graph9,
        ]
      };
      console.log(donnGraph);
      

      this.authService.test(donnGraph).subscribe(
        (response) => {
          console.log('Données envoyées au serveur avec succès ! ');

          // Maintenant, vous pouvez mettre à jour les données dans le service
          this.authService.setData(donnGraph);
        },
        (error) => {
          console.error('Erreur lors de l\'envoi des données au serveur:', error);
        }
      );
      setTimeout(() => {
        console.log('- - - - - 3s - - - - - ')
        this.showComponent = true; // Affiche le graphique
        console.log('Affichage du graph : OK !');
      }, 3000); //5s
    }

  //btn " deconnexion "
    deconnexion() {
      console.log('btn "Deconnexion" !');
      this.authService.logout();
      this.router.navigateByUrl('/connexion');
    }
}
