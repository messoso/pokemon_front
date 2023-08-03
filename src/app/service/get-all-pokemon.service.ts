import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../class/pokemon';

@Injectable({
  providedIn: 'root'
})
export class GetAllPokemonService {
  private httpOptions:any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    observe: 'response'
  }

  private url = "http://localhost:8080";
  
  constructor(
    private http: HttpClient
  ) { }

  searchAll():Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.url}/api/searchAll`);
  }


}
