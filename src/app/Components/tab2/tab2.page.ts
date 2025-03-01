import { Component } from '@angular/core';
import { RickyMortyServiceService } from 'src/app/services/ricky-morty-service.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  personajes: any[] = [];

  titulo1:string = 'Personajes ****';
  subtitulo1:string = ' ---- Ricky & Morty';

  url_next: string = '';

  constructor(private bd: RickyMortyServiceService) {} //el this.cargarPersonajes tambien podria poenrse aqui pero se hace en el onInit para que se carge en el momento donde no se necesita cargar nada más

    ngOnInit() {  //cuando ya no necesito cargar mas cosas entonces se ejecuta el metodo
      this.cargarPersonajes();
    }

  //El metodo que va a cargar los personajes
  async cargarPersonajes() {
    //this.cargando = true;
    await this.bd //espera a que la promesa se resuelva
      .getPersonajes()
      .toPromise()
      .then((resp: any) => {
        //Aqui se realiza la asignacion de los personajes de la respuesta
        this.personajes = resp.results;

        console.log('MISPERSONAJES', this.personajes);

        this.url_next = resp.info.next;
        console.log('SIGUIENTE', this.url_next);
      });
  }

  async cargarPersonajesSiguientes() {
    //this.cargando = true;
    await this.bd
      .getMasPersonajes(this.url_next)
      .toPromise()
      .then((resp: any) => {
        //Aqui se realiza la asignacion de los personajes de la respuesta
        let masPersonajes = resp.results;


        this.personajes.push(...masPersonajes);


        /*
        for(let i=0;i< masPersonajes.length;i++){
          let unPersonaje = masPersonajes[i];
          this.personajes.push(unPersonaje)
        }
        */


        this.url_next = resp.info.next;
        console.log("SIGUIENTE", this.url_next);


      });
  }




  onIonInfinite(ev: any){
    if (this.url_next !== null) {
      this.cargarPersonajesSiguientes()
    }


    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 1500);


  }
}
