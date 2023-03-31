import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { LearnServicesComponent } from './learn-services.component';


@NgModule({
  declarations: [
    LearnServicesComponent,
    Card1Component,
    Card2Component,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LearnServicesComponent]
})
export class ServicesModule { }
