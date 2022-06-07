import { Component } from '@angular/core';
import { Datum, YuGiOhCard } from '../../interfaces/card.interface';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.css']
})
export class ByNameComponent {

  term: string = ''; //Valor que va a ingresar la persona en el input
  cards: YuGiOhCard[] = [];

  //importar service en constructor
  constructor( private cardService: CardService ) { }

  search(term: string) {

    console.log(term)
    this.cardService.searchCard( term ) //Hace que pase el termino por el metodo search
      .subscribe( (cards) => {
        this.cards = Object.values(cards);
        console.log(cards);
      })
  }

}
