import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ByAttributeComponent } from './pages/by-attribute/by-attribute.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByRaceComponent } from './pages/by-race/by-race.component';
import { ByValuesComponent } from './pages/by-values/by-values.component';
import { SeeCardComponent } from './pages/see-card/see-card.component';
import { InputComponent } from './components/input/input.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    ByAttributeComponent,
    ByNameComponent,
    ByRaceComponent,
    ByValuesComponent,
    SeeCardComponent,
    InputComponent,
    CardListComponent
  ],
  exports: [
    ByAttributeComponent,
    ByNameComponent,
    ByRaceComponent,
    ByValuesComponent,
    SeeCardComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class CardModule { }
