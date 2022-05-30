import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByAttributeComponent } from './pages/by-attribute/by-attribute.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByRaceComponent } from './pages/by-race/by-race.component';
import { ByValuesComponent } from './pages/by-values/by-values.component';
import { SeeCardComponent } from './pages/see-card/see-card.component';



@NgModule({
  declarations: [
    ByAttributeComponent,
    ByNameComponent,
    ByRaceComponent,
    ByValuesComponent,
    SeeCardComponent
  ],
  exports: [
    ByAttributeComponent,
    ByNameComponent,
    ByRaceComponent,
    ByValuesComponent,
    SeeCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardModule { }
