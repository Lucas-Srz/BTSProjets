import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { AuthService } from '../../auth.service';
import { DataGraph02 } from '../../models/dataGraph02.model';

@Component({
  selector: 'app-graphique2',
  templateUrl: './graphique2.component.html',
  styleUrls: ['./graphique2.component.scss']
})
export class Graphique2Component implements OnInit {
  dataGr02: DataGraph02[] = [];
  //Créer un tableau de DataGraph02 pour avoir le même format réponse => DataGraph02
  lineChart!: Chart;
  donDates: string[] = [];
  donSf: number[] = [];
  npompe: string = '';
  
  
  constructor(private authService: AuthService) {
    this.dataGr02 = this.authService.getdonG2();
    //console.log('Réponse dataGr02 : ' + this.dataGr02); // Donne une réponse en [object Object]
    //console.log('Réponse avec JSON : ' + JSON.stringify(this.dataGr02)); // Affiche réellement les données
  }

  public options: any = {
    chart: {
      type: 'line',
      width: 640,
      height: 310
    },
    title: {
      text: 'SF de la pompe n° ' + this.authService.getData().npompe + ' !'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: this.donDates,
    },
    series: [
      {
        name: 'Courbe du SF', //Légende
        data: this.donSf
      }
    ]

  }

  ngOnInit(): void {
    // Récupére les données de donSf et de donDates
    this.donSf = this.dataGr02.map((data) => data.CPT_CMD_SF).flat(); // On utilise le .flat pour passer de number[][] à number[]
    //console.log('Données de SF (number[]) :' + this.donSf); // number[]

    this.donDates = this.dataGr02.map((data) => data.date).flat(); // On utilise le .flat pour passer de string[][] à string[]
    //console.log('Données de date (string[]) :' + this.donDates); // string[]

    // Mettre à jour les données du graphique
    this.options.series[0].data = this.donSf;
    this.options.xAxis.categories = this.donDates;

    Highcharts.chart('Graph02', this.options);
    console.log('Graphique SF (2) : Envoyé !');
  }
}

