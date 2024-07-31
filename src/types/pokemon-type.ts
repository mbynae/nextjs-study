export module POKEMON_TYPES {
    export type TypeList =
        | 'normal'
        | 'fire'
        | 'water'
        | 'grass'
        | 'flying'
        | 'fighting'
        | 'poison'
        | 'electric'
        | 'ground'
        | 'rock'
        | 'psychic'
        | 'ice'
        | 'bug'
        | 'ghost'
        | 'steel'
        | 'dragon'
        | 'dark'
        | 'fairy';
}

type TypeList =
    | 'normal'
    | 'fire'
    | 'water'
    | 'grass'
    | 'flying'
    | 'fighting'
    | 'poison'
    | 'electric'
    | 'ground'
    | 'rock'
    | 'psychic'
    | 'ice'
    | 'bug'
    | 'ghost'
    | 'steel'
    | 'dragon'
    | 'dark'
    | 'fairy';

type PokemonType<T extends TypeList> = {
    name: string;
    type: T | [T, Exclude<TypeList, T>];
    evolution: boolean;
};

const bulsaur = {
    name: '이상해씨',
    type: ['grass', 'poison'],
    evolution: true,
} satisfies PokemonType<'grass'>;

const chilmander = {
    name: '파이리',
    type: 'fire',
    evolution: true,
} satisfies PokemonType<'fire'>;

const pokemonTypeCheck = <T extends TypeList>(pokemon: PokemonType<T>) =>
    typeof pokemon.type === 'string' ? pokemon.type : pokemon.type[0];

pokemonTypeCheck(chilmander);
