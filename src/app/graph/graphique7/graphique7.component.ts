import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { AuthService } from '../../auth.service';
import { DataGraph07 } from '../../models/dataGraph07.model';

@Component({
  selector: 'app-graphique7',
  templateUrl: './graphique7.component.html',
  styleUrls: ['./graphique7.component.scss']
})
export class Graphique7Component implements OnInit {
  dataGr07: DataGraph07[] = [];
  //Crée un tableau de DataGraph07 pour avoir le même format response => DataGraph07
  lineChart!: Chart;
  donDates: string[] = [];
  donIntVd: number[] = [];
  npompe: string = '';
  
  
  constructor(private authService: AuthService) {
    this.dataGr07 = this.authService.getdonG7();
    //console.log('Reponce dataGr07 : ' + this.dataGr07); // Donne une réponce en [object Object]
    //console.log('Reponce avec JSON : ' + JSON.stringify(this.dataGr07)); // Affiche réellement les données
  }

  public options: any = {
    chart: {
      type: 'line',
      width: 640,
      height: 310
    },
    title: {
      text: 'CPT_CMD_INT_VD de la pompe n° ' + this.authService.getData().npompe + ' !'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: this.donDates,
    },
    series: [
      {
        name: 'Courbe de la CPT_CMD_INT_VD', //Légende
        data: this.donIntVd
      }
    ]

  }

  ngOnInit(): void {
    // Récupére les données de donIntVd et de donDates
    this.donIntVd = this.dataGr07.map((data) => data.CPT_CMD_INT_VD).flat(); // On utilise le .flat pour passer de number[][] à number[]
    //console.log('Données de CPT_CMD_INT_VD (number[]) :' + this.donIntVd); // number[]

    this.donDates = this.dataGr07.map((data) => data.date).flat(); // On utilise le .flat pour passer de string[][] à string[]
    //console.log('Données de date (string[]) :' + this.donDates); // string[]

    // Mettre à jour les données du graphique
    this.options.series[0].data = this.donIntVd;
    this.options.xAxis.categories = this.donDates;

    Highcharts.chart('Graph07', this.options);
    console.log('Graphique CPT_CMD_INT_VD (7) : Envoyé !');
  }
}

