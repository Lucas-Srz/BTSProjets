import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { AuthService } from '../../auth.service';
import { DataGraph05 } from '../../models/dataGraph05.model';

@Component({
  selector: 'app-graphique5',
  templateUrl: './graphique5.component.html',
  styleUrls: ['./graphique5.component.scss']
})
export class Graphique5Component implements OnInit {
  dataGr05: DataGraph05[] = [];
  //Crée un tableau de DataGraph05 pour avoir le même format response => DataGraph05
  lineChart!: Chart;
  donDates: string[] = [];
  donRegulAsc: number[] = [];
  npompe: string = '';
  
  
  constructor(private authService: AuthService) {
    this.dataGr05 = this.authService.getdonG5();
    //console.log('Reponce dataGr05 : ' + this.dataGr05); // Donne une réponce en [object Object]
    console.log('Reponce avec JSON : ' + JSON.stringify(this.dataGr05)); // Affiche réellement les données
  }

  public options: any = {
    chart: {
      type: 'line',
      width: 640,
      height: 310
    },
    title: {
      text: 'CPT_REGUL_ASC de la pompe n° ' + this.authService.getData().npompe + ' !'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: this.donDates,
    },
    series: [
      {
        name: 'Courbe CPT_REGUL_ASC', //Légende
        data: this.donRegulAsc
      }
    ]

  }

  ngOnInit(): void {
    // Récupére les données de donRegulAsc et de donDates
    this.donRegulAsc = this.dataGr05.map((data) => data.CPT_REGUL_ASC).flat(); // On utilise le .flat pour passer de number[][] à number[]
    console.log('Données de CPT_REGUL_ASC (number[]) :' + this.donRegulAsc); // number[]

    this.donDates = this.dataGr05.map((data) => data.date).flat(); // On utilise le .flat pour passer de string[][] à string[]
    console.log('Données de date (string[]) :' + this.donDates); // string[]

    // Mettre à jour les données du graphique
    this.options.series[0].data = this.donRegulAsc;
    this.options.xAxis.categories = this.donDates;

    Highcharts.chart('Graph05', this.options);
    console.log('Graphique CPT_REGUL_ASC (5) : Envoyé !');
  }
}

