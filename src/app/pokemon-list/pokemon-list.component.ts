import { Component } from '@angular/core';
import PokemonList from '../../assets/mock/PokemonList.json';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  list = PokemonList;
}
