import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { AuthService } from '../../auth.service';
import { DataGraph01 } from '../../models/dataGraph01.model';

@Component({
  selector: 'app-graphique1',
  templateUrl: './graphique1.component.html',
  styleUrls: ['./graphique1.component.scss']
})
export class Graphique1Component implements OnInit {
  dataGr01: DataGraph01[] = [];
  //Créer un tableau de DataGraph01 pour avoir le même format réponse => DataGraph01
  lineChart!: Chart;
  donDates: string[] = [];
  donTemp: number[] = [];
  npompe: string = '';
  
  
  constructor(private authService: AuthService) {
    this.dataGr01 = this.authService.getdonG1();
    //console.log('Réponse dataGr01 : ' + this.dataGr01); // Donne une réponse en [object Object]
    //console.log('Réponse avec JSON : ' + JSON.stringify(this.dataGr01)); // Affiche réellement les données
  }

  public options: any = {
    chart: {
      type: 'line',
      width: 640,
      height: 310
    },
    title: {
      text: 'Temperature de la pompe n° ' + this.authService.getData().npompe + ' !'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: this.donDates,
    },
    series: [
      {
        name: 'Courbe de la temperature', //Légende
        data: this.donTemp
      }
    ]

  }

  ngOnInit(): void {
    // Récupére les données de donTemp et de donDates
    this.donTemp = this.dataGr01.map((data) => data.temperature).flat(); // On utilise le .flat pour passer de number[][] à number[]
    //console.log('Données de température (number[]) :' + this.donTemp); // number[]

    this.donDates = this.dataGr01.map((data) => data.date).flat(); // On utilise le .flat pour passer de string[][] à string[]
    //console.log('Données de date (string[]) :' + this.donDates); // string[]

    // Mettre à jour les données du graphique
    this.options.series[0].data = this.donTemp;
    this.options.xAxis.categories = this.donDates;

    Highcharts.chart('Graph01', this.options);
    console.log('Graphique Temperature (1) : Envoyé !');
  }
}

