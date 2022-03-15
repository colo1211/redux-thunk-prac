export const POKEMON_SUCCESS = 'POKEMON_SUCCESS';
export const POKEMON_FAIL = 'POKEMON_FAIL';

export type PokemonType = {
    abilities : PokemonAblity[],
    sprites : PokemonSprites
}

export type PokemonAblity = {
    ability: {
        name:string,
        url:string,
        is_hidden:boolean,
        slot:number,
    }
}

export type PokemonSprites = {
    front_default : string, 
}

export interface pokemonFailDispatch {
    type: typeof POKEMON_FAIL
}

export interface pokemonSuccessDispatch {
    type : typeof POKEMON_SUCCESS 
    payload : {
        abilities : PokemonAblity[],
        sprites : PokemonSprites
    }
}

export type PokemonDispatchType = pokemonFailDispatch | pokemonSuccessDispatch; 