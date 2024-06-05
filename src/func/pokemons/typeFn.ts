import POKEMON_ENUM from '@/enums/pokemons';
import type { POKEMON_TYPES } from '@/types/pokemon-type';

const nameKorChange = (type: POKEMON_TYPES.TypeList) => {
    return POKEMON_ENUM.typeKorName[type];
};

const PokemonTypeFn = { nameKorChange };
export default PokemonTypeFn;
