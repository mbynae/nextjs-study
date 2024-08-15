import POKEMON_ENUM from '@/enums/pokemons';
import PokemonTypeFn from '@/func/pokemons/typeFn';
import type { POKEMON_TYPES } from '@/types/pokemon-type';

type Props = {
    params: {
        type: POKEMON_TYPES.TypeList;
        subType: POKEMON_TYPES.TypeList;
    };
};

//type과 subType에 대한 params만 생성
//params에 부모 segment 정보가 포함되어 있다. (params: {type : string, subType: string})
export default function PokemonSubType({ params }: Props) {
    const typeName = PokemonTypeFn.nameKorChange(params.type);
    const subTypeName = PokemonTypeFn.nameKorChange(params.subType);

    return (
        <div>
            {typeName}/{subTypeName} 타입 페이지
        </div>
    );
}

type Params = {
    params: { type: POKEMON_TYPES.TypeList };
};

export const dynamicParams = false;
//generateStaticParams에도 부모 segment 정보가 보함되어 있음 (현재 버그인지 작동 불가)
export function generateStaticParams({ params }: Params) {
    const typeArr = Object.keys(POKEMON_ENUM.typeKorName) as POKEMON_TYPES.TypeList[];

    let types = [] as { type: POKEMON_TYPES.TypeList; subType: POKEMON_TYPES.TypeList }[];
    typeArr.forEach((type) => typeArr.forEach((subType) => type !== subType && types.push({ type: type, subType: subType })));
    return types;
}
