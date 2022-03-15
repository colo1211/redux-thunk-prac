import { POKEMON_SUCCESS, POKEMON_FAIL, PokemonType, PokemonDispatchType } from './../actions/PokemonActionTypes';
interface InitailState {
    success : boolean
    pokemon?: PokemonType
}

const initailState: InitailState = {
    success: false
};

const PokemonReducer = (state = initailState, action: PokemonDispatchType) : InitailState=> {
  switch (action.type) {
    case POKEMON_FAIL:
        return {
            ...state, 
            success : false, 
        }
    case POKEMON_SUCCESS:
        const {abilities, sprites} = action.payload; 
        return {
            ...state, 
            success : true, 
            pokemon : {
                abilities, 
                sprites, 
            }
        }

    default:
      return state;
  }
};

export default PokemonReducer;
