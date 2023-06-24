import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { DataODM } from './models/dataOdm.model';
import { DataGraph01 } from './models/dataGraph01.model';
import { DataGraph02 } from './models/dataGraph02.model';
import { DataGraph03 } from './models/dataGraph03.model';
import { DataGraph04 } from './models/dataGraph04.model';
import { DataGraph05 } from './models/dataGraph05.model';
import { DataGraph06 } from './models/dataGraph06.model';
import { DataGraph07 } from './models/dataGraph07.model';
import { DataGraph08 } from './models/dataGraph08.model';
import { DataGraph09 } from './models/dataGraph09.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

    DonneeNom: string = '';
    DonneePrenom: string = '';

    private dataOdm: DataODM = new DataODM();

    constructor(private http: HttpClient) {}
  
  //Logout
    public logout() {
      localStorage.removeItem(this.token);
    }

  // Service pour la connexion de la page 'Landing-Pages'
    url_login = 'http://localhost:3000/connexionadmin';
    private token!: string;

    public admin(nom: string, mot_de_passe: string): Observable<any>{
      return this.http.post<any>(this.url_login, {login: nom, password: mot_de_passe})
        .pipe(tap(res => {
          if (res.auth) { //Récupère le token de la réponse
            this.token = res.token;
            localStorage.setItem('token', this.token);
          }
        }))
    }

    public getToken(): string {
      return this.token;
    }

    public isAuthenticated(): boolean {
      const token = localStorage.getItem('token');
      return token !== null;
    }


  // Service pour la création de compte de la page 'Connexion' (retrieve)
    url_cree = 'http://localhost:3000/cree';

    public cree(nom: string, prenom: string, mot_de_passe: string): Observable<any>{
      return this.http.post<any>(this.url_cree, {login: nom, prenom: prenom, password: mot_de_passe});
    }


  // Service pour la connexion de la page 'Connexion' (send)
    url_connexion ='http://localhost:3000/connexion';

    public connexion(nom: string, mot_de_passe: string): Observable<any>{
      return this.http.post<any>(this.url_connexion, {login: nom, password: mot_de_passe});
    }
  

  // Getter / Setter pour l'envoye des données de ODM => Serv
    //Getter
    getData(): DataODM {
      return this.dataOdm;
    }

    // Setter
      setData(value: DataODM) {
        this.dataOdm = value;
        console.log('Données de "setData" (ODM => Serv) : ' + this.dataOdm)
      }

  // Service
    url_test = 'http://localhost:3000/AffGraph';
    
    public test(data: DataODM): Observable<any>{
      return this.http.post<any>(this.url_test, data)
      .pipe(
        tap((response) => {
          //console.log("Response : " + response);

          // Mettez à jour les données renvoyées par le serveur dans le service
           if (Boolean(data.graph[0]) === true) {
            //console.log("Données graphique 1 : ", response.donG1);
             this.setdonG1(response.results1);
            console.log("setdonG1 : OK")
           }
           if (Boolean(data.graph[1]) === true) {
            //console.log("Données graphique 2 : ", response.donG2);
            this.setdonG2(response.results2);
            console.log("setdonG2 : OK")
           }
           if (Boolean(data.graph[2]) === true) {
            //console.log("Données graphique 3 : ", response.donG3);
            this.setdonG3(response.results3);
            console.log("setdonG3 : OK")
          }
          if (Boolean(data.graph[3]) === true) {
            //console.log("Données graphique 4 : ", response.donG4);
            this.setdonG4(response.results4);
            console.log("setdonG4 : OK")
          }
          if (Boolean(data.graph[4]) === true) {
            //console.log("Données graphique 5 : ", response.donG5);
            this.setdonG5(response.results5);
            console.log("setdonG5 : OK")
          }
          if (Boolean(data.graph[5]) === true) {
            //console.log("Données graphique 6 : ", response.donG6);
            this.setdonG6(response.results6);
            console.log("setdonG6 : OK")
          }
          if (Boolean(data.graph[6]) === true) {
            //console.log("Données graphique 7 : ", response.donG7);
            this.setdonG7(response.results7);
            console.log("setdonG7 : OK")
          }
          if (Boolean(data.graph[7]) === true) {
            //console.log("Données graphique 8 : ", response.donG8);
            this.setdonG8(response.results8);
            console.log("setdonG8 : OK")
          }
          if (Boolean(data.graph[8]) === true) {
            //console.log("Données graphique 9 : ", response.donG9);
            this.setdonG9(response.results9);
            console.log("setdonG9 : OK")
          }
        })
      );
    }


  // Récupération des données pour le graphique 1 : Temperature
    private donG1: DataGraph01[] = new Array<DataGraph01>();

    // Getter
      getdonG1(): DataGraph01[] {
        //console.log('Données de "getdonG1" (Serv => Service):', this.donG1);
        return this.donG1;
      }
      
    // Setter
      setdonG1(value: DataGraph01[]): void {
        this.donG1 = value;
        //console.log('Données de "setdonG1" (Serv => Service):', this.donG1);
      }


  // Récupération des données pour le graphique 2 : SF
    private donG2: DataGraph02[] = new Array<DataGraph02>();

    // Getter
      getdonG2(): DataGraph02[] {
        //console.log('Données de "getdonG2" (Serv => Service):', this.donG2);
        return this.donG2;
      }
      
    // Setter
      setdonG2(value: DataGraph02[]): void {
        this.donG2 = value;
        //console.log('Données de "setdonG2" (Serv => Service):', this.donG2);
      }


  // Récupération des données pour le graphique 3 : PPIECE
    private donG3: DataGraph03[] = new Array<DataGraph03>();

    // Getter
      getdonG3(): DataGraph03[] {
        console.log('Données de "getdonG3" (Serv => Service):', this.donG3);
        return this.donG3;
      }
      
    // Setter
      setdonG3(value: DataGraph03[]): void {
        this.donG3 = value;
        console.log('Données de "setdonG3" (Serv => Service):', this.donG3);
      }


  // Récupération des données pour le graphique 4 : DEF_PPIECE
    private donG4: DataGraph04[] = new Array<DataGraph04>();

    // Getter
      getdonG4(): DataGraph04[] {
        console.log('Données de "getdonG4" (Serv => Service):', this.donG4);
        return this.donG4;
      }
      
    // Setter
      setdonG4(value: DataGraph04[]): void {
        this.donG4 = value;
        console.log('Données de "setdonG4" (Serv => Service):', this.donG4);
      }


  // Récupération des données pour le graphique 5 : CPT_REGUL_ASC
    private donG5: DataGraph05[] = new Array<DataGraph05>();

    // Getter
      getdonG5(): DataGraph05[] {
        console.log('Données de "getdonG5" (Serv => Service):', this.donG5);
        return this.donG5;
      }
      
    // Setter
      setdonG5(value: DataGraph05[]): void {
        this.donG5 = value;
        console.log('Données de "setdonG5" (Serv => Service):', this.donG5);
      }


  // Récupération des données pour le graphique 6 : CPT_DEF_REGUL
    private donG6: DataGraph06[] = new Array<DataGraph06>();

    // Getter
      getdonG6(): DataGraph06[] {
        console.log('Données de "getdonG6" (Serv => Service):', this.donG6);
        return this.donG6;
      }
      
    // Setter
      setdonG6(value: DataGraph06[]): void {
        this.donG6 = value;
        console.log('Données de "setdonG6" (Serv => Service):', this.donG6);
      }


  // Récupération des données pour le graphique 7 : CPT_CMD_INT_VD
    private donG7: DataGraph07[] = new Array<DataGraph07>();

    // Getter
      getdonG7(): DataGraph07[] {
        console.log('Données de "getdonG7" (Serv => Service):', this.donG7);
        return this.donG7;
      }
      
    // Setter
      setdonG7(value: DataGraph07[]): void {
        this.donG7 = value;
        console.log('Données de "setdonG7" (Serv => Service):', this.donG7);
      }


  // Récupération des données pour le graphique 8 : CPT_CMD_EXT_VD
    private donG8: DataGraph08[] = new Array<DataGraph08>();

    // Getter
      getdonG8(): DataGraph08[] {
        console.log('Données de "getdonG8" (Serv => Service):', this.donG8);
        return this.donG8;
      }
      
    // Setter
      setdonG8(value: DataGraph08[]): void {
        this.donG8 = value;
        console.log('Données de "setdonG8" (Serv => Service):', this.donG8);
      }


  // Récupération des données pour le graphique 9 : CPT_DEF_ALIM
    private donG9: DataGraph09[] = new Array<DataGraph09>();

    // Getter
      getdonG9(): DataGraph09[] {
        console.log('Données de "getdonG9" (Serv => Service):', this.donG9);
        return this.donG9;
      }
      
    // Setter
      setdonG9(value: DataGraph09[]): void {
        this.donG9 = value;
        console.log('Données de "setdonG9" (Serv => Service):', this.donG9);
      }
}
