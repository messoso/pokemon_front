import { Pokemon } from "../class/pokemon";
import { Status } from "../class/status";
import PokemonList from '../../assets/mock/PokemonList.json';


export class GetPokemonUtil {
    public getList(): Pokemon[]{
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
        return list;
    }

    public getTitle(pokemon: Pokemon): String[]{
      let columnList: String[] = [];
      for(let key in pokemon){
        if(key === 'status'){
          for(let statusKey in pokemon[key]){
            columnList.push(statusKey);
          }
        }else{
          columnList.push(key);
        }
      }
      console.log(columnList);
      return columnList;
    }
}
