import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent {

  carrData: any; //Déclarer une variable pour stocker les données du carrousel

  constructor(private http: HttpClient, private router: Router) {}
}
