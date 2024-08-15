import PokemonTypeFn from '@/func/pokemons/typeFn';
import POKEMON_ENUM from '@/enums/pokemons';

import Link from 'next/link';
import styles from '../pokemons.module.css';

import type { POKEMON_TYPES } from '@/types/pokemon-type';

type Props = {
    params: {
        type: POKEMON_TYPES.TypeList;
    };
};

//type에 대한 params만 생성
export default function PokemonType({ params }: Props) {
    const typeList = Object.keys(POKEMON_ENUM.typeKorName).filter((type) => params.type !== type);
    const typeName = PokemonTypeFn.nameKorChange(params.type);

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{typeName}타입 페이지</h3>
            <div>
                <p className={styles.paragraph}>＊서브 타입 선택</p>
                <div className={styles.buttonBox}>
                    {typeList.map((type) => (
                        <Link key={type} href={`/pokemons/${params.type}/${type}`}>
                            <button className={styles.button}>{type}</button>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export const dynamicParams = false;
export function generateStaticParams() {
    const types = Object.keys(POKEMON_ENUM.typeKorName).map((e) => ({ type: e }));
    return types;
}
