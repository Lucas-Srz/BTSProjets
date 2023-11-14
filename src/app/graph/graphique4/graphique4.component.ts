import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { AuthService } from '../../auth.service';
import { DataGraph04 } from '../../models/dataGraph04.model';

@Component({
  selector: 'app-graphique4',
  templateUrl: './graphique4.component.html',
  styleUrls: ['./graphique4.component.scss']
})
export class Graphique4Component implements OnInit {
  dataGr04: DataGraph04[] = [];
  //Créer un tableau de DataGraph04 pour avoir le même format réponse => DataGraph04
  lineChart!: Chart;
  donDates: string[] = [];
  donDefPpiece: number[] = [];
  npompe: string = '';
  
  
  constructor(private authService: AuthService) {
    this.dataGr04 = this.authService.getdonG4();
    //console.log('Réponse dataGr04 : ' + this.dataGr04); // Donne une réponse en [object Object]
    //console.log('Réponse avec JSON : ' + JSON.stringify(this.dataGr04)); // Affiche réellement les données
  }

  public options: any = {
    chart: {
      type: 'line',
      width: 640,
      height: 310
    },
    title: {
      text: 'DEF_PPIECE de la pompe n° ' + this.authService.getData().npompe + ' !'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: this.donDates,
    },
    series: [
      {
        name: 'Courbe DEF_PPIECE', //Légende
        data: this.donDefPpiece
      }
    ]

  }

  ngOnInit(): void {
    // Récupére les données de donDefPpiece et de donDates
    this.donDefPpiece = this.dataGr04.map((data) => data.CPT_DEF_PPIECE).flat(); // On utilise le .flat pour passer de number[][] à number[]
    //console.log('Données de SF (number[]) :' + this.donDefPpiece); // number[]

    this.donDates = this.dataGr04.map((data) => data.date).flat(); // On utilise le .flat pour passer de string[][] à string[]
    //console.log('Données de date (string[]) :' + this.donDates); // string[]

    // Mettre à jour les données du graphique
    this.options.series[0].data = this.donDefPpiece;
    this.options.xAxis.categories = this.donDates;

    Highcharts.chart('Graph04', this.options);
    console.log('Graphique DEF_PPIECE (4) : Envoyé !');
  }
}

