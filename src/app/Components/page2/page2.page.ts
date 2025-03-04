import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickyMortyServiceService } from 'src/app/services/ricky-morty-service.service';



@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
  standalone: false,

})
export class Page2Page {

  id!: number;
  personaje: any = [];

  menuType: string = 'overlay'

  constructor(private activatedRoute: ActivatedRoute, private bd: RickyMortyServiceService) {


      this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      console.log("IDPERSONAJE_COMP", this.id);
     
      this.cargarUnPersonaje()
      

    });
  }

  async cargarUnPersonaje() {
    await this.bd
      .geUnPersonaje(this.id)
      .toPromise()
      .then((resp: any) => {
        //Aqui se realiza la asignacion de los personajes de la respuesta
        this.personaje = resp;
        console.log('UNPERSONAJE', this.personaje);
      });
  }
}

