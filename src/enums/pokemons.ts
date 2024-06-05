const typeKorName = {
    normal: '노말',
    fire: '불',
    water: '물',
    grass: '풀',
    flying: '비행',
    fighting: '격투',
    poison: '독',
    electric: '전기',
    ground: '땅',
    rock: '바위',
    psychic: '에스퍼',
    ice: '얼음',
    bug: '벌레',
    ghost: '고스트',
    steel: '강철',
    dragon: '드래곤',
    dark: '악',
    fairy: '페어리',
} as const;

const POKEMON_ENUM = { typeKorName };
export default POKEMON_ENUM;
