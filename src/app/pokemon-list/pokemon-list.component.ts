import { Component } from '@angular/core';
import PokemonList from '../../assets/mock/PokemonList.json';
import {Pokemon} from '../class/pokemon';
import {Status} from '../class/status';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  list: Pokemon[] = this.getList();

   getList(){
    let list: Pokemon[] = [];
    for(let entity of PokemonList){
      let status: Status = {
        h: entity.status.h
        , a: entity.status.a
        , b: entity.status.b
        , c: entity.status.c
        , d: entity.status.d
        , s: entity.status.s
        , total: entity.status.h + entity.status.a + entity.status.b + entity.status.c + entity.status.d + entity.status.s
      }

      let pokemon: Pokemon = {
        id: entity.id
        , branch: entity.branch
        , name: entity.name
        , status: status
        , type1: entity.type1
        , type2: entity.type2 == 'なし'? '' : entity.type2
      };

      list.push(pokemon);

    }

    list.sort((a, b) => a.id - b.id);

    return list;
  }

}
