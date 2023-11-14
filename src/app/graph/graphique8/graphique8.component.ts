import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { AuthService } from '../../auth.service';
import { DataGraph08 } from '../../models/dataGraph08.model';

@Component({
  selector: 'app-graphique8',
  templateUrl: './graphique8.component.html',
  styleUrls: ['./graphique8.component.scss']
})
export class Graphique8Component implements OnInit {
  dataGr08: DataGraph08[] = [];
  //Créer un tableau de DataGraph08 pour avoir le même format réponse => DataGraph08
  lineChart!: Chart;
  donDates: string[] = [];
  donExtVd: number[] = [];
  npompe: string = '';
  
  
  constructor(private authService: AuthService) {
    this.dataGr08 = this.authService.getdonG8();
    //console.log('Réponse dataGr08 : ' + this.dataGr08); // Donne une réponse en [object Object]
    //console.log('Réponse avec JSON : ' + JSON.stringify(this.dataGr08)); // Affiche réellement les données
  }

  public options: any = {
    chart: {
      type: 'line',
      width: 640,
      height: 310
    },
    title: {
      text: 'CPT_CMD_EXT_VD de la pompe n° ' + this.authService.getData().npompe + ' !'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: this.donDates,
    },
    series: [
      {
        name: 'Courbe de la CPT_CMD_EXT_VD', //Légende
        data: this.donExtVd
      }
    ]

  }

  ngOnInit(): void {
    // Récupére les données de donExtVd et de donDates
    this.donExtVd = this.dataGr08.map((data) => data.CPT_CMD_EXT_VD).flat(); // On utilise le .flat pour passer de number[][] à number[]
    //console.log('Données de CPT_CMD_EXT_VD (number[]) :' + this.donExtVd); // number[]

    this.donDates = this.dataGr08.map((data) => data.date).flat(); // On utilise le .flat pour passer de string[][] à string[]
    //console.log('Données de date (string[]) :' + this.donDates); // string[]

    // Mettre à jour les données du graphique
    this.options.series[0].data = this.donExtVd;
    this.options.xAxis.categories = this.donDates;

    Highcharts.chart('Graph08', this.options);
    console.log('Graphique CPT_CMD_EXT_VD (8) : Envoyé !');
  }
}

