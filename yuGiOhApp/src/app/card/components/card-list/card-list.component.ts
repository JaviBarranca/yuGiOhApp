import { Component, Input, OnInit } from '@angular/core';
import { Datum, YuGiOhCard } from '../../interfaces/card.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() cards: YuGiOhCard[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  mostrar() {
    console.log(this.cards)
  }

  
}
