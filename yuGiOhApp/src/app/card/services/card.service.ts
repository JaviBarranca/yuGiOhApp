import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datum, YuGiOhCard } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiUrl: string = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

  //HttpClient para trabajar las peticiones al http
  constructor( private http: HttpClient ) { }

  searchCard ( term: string): Observable<YuGiOhCard[]> {

    const url = `${ this.apiUrl }?&fname=${ term }`;
    
    return this.http.get<YuGiOhCard[]>(url);


  }
}
