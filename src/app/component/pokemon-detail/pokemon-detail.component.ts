import { Component } from '@angular/core';
import { GetPokemonUtil } from '../../util/get-pokemon-util';
import {MatTableModule} from '@angular/material/table';
import { GetAllPokemonService } from '../../service/get-all-pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent {
  constructor(
    private service: GetAllPokemonService
  ){}

  ngOnInit(){
    const productsObservable = this.service.searchAll();
    productsObservable.subscribe(
      (data) =>{console.log("succeeded!")},
      (error) => {console.log("failed...")},
      () => {console.log('finished!')}
    )
  }

  getAllPokemon(): void{
    this.service.searchAll().subscribe(res => {
      console.log(JSON.stringify(res))
    })
  }

  
}
