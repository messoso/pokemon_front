import { Component } from '@angular/core';
import PokemonList from '../../assets/mock/PokemonList.json';
import {Pokemon} from '../class/pokemon';
import {Status} from '../class/status';
import { GetPokemonUtil } from '../util/get-pokemon-util';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  getPokemonUtil = new GetPokemonUtil();
  list = this.getPokemonUtil.getList();
  columnName = this.getPokemonUtil.getTitle(this.list[0]);

}
