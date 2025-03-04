import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personaje-list',
  templateUrl: './personaje-list.component.html',
  styleUrls: ['./personaje-list.component.scss'],
  standalone:false
})
export class PersonajeListComponent  implements OnInit {

  @Input() personajes: any[] = [];
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';

  constructor(private router: Router) { }

  verPersonaje(unIdPersonaje:number){
    console.log("PERSONAJE",unIdPersonaje);
    this.router.navigate(['/tabs/tab5',unIdPersonaje]);
  } 



  ngOnInit() {}

}
