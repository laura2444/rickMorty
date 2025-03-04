import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page2PageRoutingModule } from './page2-routing.module';

import { Page2Page } from './page2.page';
import { ElementsModule } from '../elements/elements.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page2PageRoutingModule,
    ElementsModule
  ],
  declarations: [Page2Page]
})
export class Page2PageModule {}
