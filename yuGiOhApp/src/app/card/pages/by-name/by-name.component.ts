import { Component } from '@angular/core';
import { Card } from '../../interfaces/card.interface';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.css']
})
export class ByNameComponent {

  term: string = ''; //Valor que va a ingresar la persona en el input
  cards: Card[] = [];

  //importar service en constructor
  constructor( private cardService: CardService ) { }

  search(term: string) {
    console.log(this.term);
    this.term = term;

    this.cardService.searchCard( this.term ) //Hace que pase el termino por el metodo search
      .subscribe( cards => {
        console.log(cards);
        this.cards = cards;
      })
  }

}
