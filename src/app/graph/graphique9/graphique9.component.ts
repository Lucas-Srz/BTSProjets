import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { AuthService } from '../../auth.service';
import { DataGraph09 } from '../../models/dataGraph09.model';

@Component({
  selector: 'app-graphique9',
  templateUrl: './graphique9.component.html',
  styleUrls: ['./graphique9.component.scss']
})
export class Graphique9Component implements OnInit {
  dataGr09: DataGraph09[] = [];
  //Créer un tableau de DataGraph09 pour avoir le même format réponse => DataGraph09
  lineChart!: Chart;
  donDates: string[] = [];
  donDefAlim: number[] = [];
  npompe: string = '';
  
  
  constructor(private authService: AuthService) {
    this.dataGr09 = this.authService.getdonG9();
    //console.log('Réponse dataGr09 : ' + this.dataGr09); // Donne une réponse en [object Object]
    //console.log('Réponse avec JSON : ' + JSON.stringify(this.dataGr09)); // Affiche réellement les données
  }

  public options: any = {
    chart: {
      type: 'line',
      width: 640,
      height: 310
    },
    title: {
      text: 'CPT_DEF_ALIM de la pompe n° ' + this.authService.getData().npompe + ' !'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: this.donDates,
    },
    series: [
      {
        name: 'Courbe de la CPT_DEF_ALIM', //Légende
        data: this.donDefAlim
      }
    ]

  }

  ngOnInit(): void {
    // Récupére les données de donDefAlim et de donDates
    this.donDefAlim = this.dataGr09.map((data) => data.CPT_DEF_ALIM).flat(); // On utilise le .flat pour passer de number[][] à number[]
    //console.log('Données de CPT_DEF_ALIM (number[]) :' + this.donDefAlim); // number[]

    this.donDates = this.dataGr09.map((data) => data.date).flat(); // On utilise le .flat pour passer de string[][] à string[]
    //console.log('Données de date (string[]) :' + this.donDates); // string[]

    // Mettre à jour les données du graphique
    this.options.series[0].data = this.donDefAlim;
    this.options.xAxis.categories = this.donDates;

    Highcharts.chart('Graph09', this.options);
    console.log('Graphique CPT_DEF_ALIM (9) : Envoyé !');
  }
}

