import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
  standalone: false,
  
})
export class Page1Page {
  isModalOpen =false;
  selectDate: string | undefined;

  constructor(){}

  confirmDate(){
    if(this.selectDate){
      console.log('Fecha seleccionada:', this.selectDate);
      alert(`Fecha seleccionada: ${this.selectDate}`);
      this.isModalOpen = false;
    }else{
      alert('seleccione fecha bitch');
    }

  }

}