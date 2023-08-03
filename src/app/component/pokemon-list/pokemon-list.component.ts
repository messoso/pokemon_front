import { Component, Inject } from '@angular/core';
import {Pokemon} from '../../class/pokemon';
import { GetPokemonUtil } from '../../util/get-pokemon-util';
import { GetAllPokemonService } from '../../service/get-all-pokemon.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  @Inject(String) columnName: String[];
  pokemonList: Pokemon[];
constructor(
    private service: GetAllPokemonService,
    private getPokemonUtil: GetPokemonUtil,

  ){}

  ngOnInit(){
    this.service.searchAll().subscribe(res => {
      this.pokemonList = this.getPokemonUtil.getList(res);
      this.columnName = this.getPokemonUtil.getTitle(this.pokemonList[0]);
    })
  }
}
