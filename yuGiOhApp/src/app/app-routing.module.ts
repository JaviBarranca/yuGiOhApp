import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ByNameComponent } from './card/pages/by-name/by-name.component';
import { ByAttributeComponent } from './card/pages/by-attribute/by-attribute.component';
import { ByRaceComponent } from "./card/pages/by-race/by-race.component";
import { ByValuesComponent } from './card/pages/by-values/by-values.component';
import { SeeCardComponent } from "./card/pages/see-card/see-card.component";


const routes: Routes = [

    {
        path: '',
        component: ByNameComponent,
        pathMatch: 'full' //revisar
    },
    {
        path: 'attribute',
        component: ByAttributeComponent
    },
    {
        path: 'race',
        component: ByRaceComponent
    },
    {
        path: 'values',
        component: ByValuesComponent
    },
    {
        path: 'card/:id',
        component: SeeCardComponent
    },
    {
        path: '**',
        redirectTo: ''
    }

];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}