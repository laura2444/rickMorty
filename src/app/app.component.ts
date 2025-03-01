import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  //para usar componente debo hacer llamado de este, asi como en el index.html que se llama al app root desde el body
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor() {}
}
