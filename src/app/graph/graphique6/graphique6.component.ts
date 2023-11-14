import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { AuthService } from '../../auth.service';
import { DataGraph06 } from '../../models/dataGraph06.model';

@Component({
  selector: 'app-graphique6',
  templateUrl: './graphique6.component.html',
  styleUrls: ['./graphique6.component.scss']
})
export class Graphique6Component implements OnInit {
  dataGr06: DataGraph06[] = [];
  //Créer un tableau de DataGraph06 pour avoir le même format réponse => DataGraph06
  lineChart!: Chart;
  donDates: string[] = [];
  donDefRegul: number[] = [];
  npompe: string = '';
  
  
  constructor(private authService: AuthService) {
    this.dataGr06 = this.authService.getdonG6();
    //console.log('Réponse dataGr06 : ' + this.dataGr06); // Donne une réponse en [object Object]
    //console.log('Réponse avec JSON : ' + JSON.stringify(this.dataGr06)); // Affiche réellement les données
  }

  public options: any = {
    chart: {
      type: 'line',
      width: 640,
      height: 310
    },
    title: {
      text: 'DEF_REGUL de la pompe n° ' + this.authService.getData().npompe + ' !'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: this.donDates,
    },
    series: [
      {
        name: 'Courbe de la DEF_REGUL', //Légende
        data: this.donDefRegul
      }
    ]

  }

  ngOnInit(): void {
    // Récupére les données de donDefRegul et de donDates
    this.donDefRegul = this.dataGr06.map((data) => data.CPT_DEF_REGUL).flat(); // On utilise le .flat pour passer de number[][] à number[]
    //console.log('Données de DEF_REGUL (number[]) :' + this.donDefRegul); // number[]

    this.donDates = this.dataGr06.map((data) => data.date).flat(); // On utilise le .flat pour passer de string[][] à string[]
    //console.log('Données de date (string[]) :' + this.donDates); // string[]

    // Mettre à jour les données du graphique
    this.options.series[0].data = this.donDefRegul;
    this.options.xAxis.categories = this.donDates;

    Highcharts.chart('Graph06', this.options);
    console.log('Graphique DEF_REGUL (6) : Envoyé !');
  }
}

