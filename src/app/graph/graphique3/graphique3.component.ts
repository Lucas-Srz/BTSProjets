import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import { AuthService } from '../../auth.service';
import { DataGraph03 } from '../../models/dataGraph03.model';

@Component({
  selector: 'app-graphique3',
  templateUrl: './graphique3.component.html',
  styleUrls: ['./graphique3.component.scss']
})
export class Graphique3Component implements OnInit {
  dataGr03: DataGraph03[] = [];
  //Crée un tableau de DataGraph03 pour avoir le même format response => DataGraph03
  lineChart!: Chart;
  donDates: string[] = [];
  donPpiece: number[] = [];
  npompe: string = '';
  
  
  constructor(private authService: AuthService) {
    this.dataGr03 = this.authService.getdonG3();
    //console.log('Reponce dataGr03 : ' + this.dataGr03); // Donne une réponce en [object Object]
    //console.log('Reponce avec JSON : ' + JSON.stringify(this.dataGr03)); // Affiche réellement les données
  }

  public options: any = {
    chart: {
      type: 'line',
      width: 640,
      height: 310
    },
    title: {
      text: 'PPIECE de la pompe n° ' + this.authService.getData().npompe + ' !'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: this.donDates,
    },
    series: [
      {
        name: 'Courbe PPIECE', //Légende
        data: this.donPpiece
      }
    ]

  }

  ngOnInit(): void {
    // Récupére les données de donPpiece et de donDates
    this.donPpiece = this.dataGr03.map((data) => data.CPT_PPIECE).flat(); // On utilise le .flat pour passer de number[][] à number[]
    //console.log('Données de SF (number[]) :' + this.donPpiece); // number[]

    this.donDates = this.dataGr03.map((data) => data.date).flat(); // On utilise le .flat pour passer de string[][] à string[]
    //console.log('Données de date (string[]) :' + this.donDates); // string[]

    // Mettre à jour les données du graphique
    this.options.series[0].data = this.donPpiece;
    this.options.xAxis.categories = this.donDates;

    Highcharts.chart('Graph03', this.options);
    console.log('Graphique PPIECE (3) : Envoyé !');
  }
}

