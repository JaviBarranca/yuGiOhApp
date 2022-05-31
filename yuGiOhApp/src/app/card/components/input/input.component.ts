import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  //permite emitir evento
  @Output() onEnter : EventEmitter<string> = new EventEmitter();

  term: string = ''

  search() {
    this.onEnter.emit( this.term );
  }

}


