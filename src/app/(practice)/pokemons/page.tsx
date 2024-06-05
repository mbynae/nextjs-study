import POKEMON_ENUM from '@/enums/pokemons';
import Link from 'next/link';
import styles from './pokemons.module.css';

export default function Pokemons() {
    const typeList = Object.keys(POKEMON_ENUM.typeKorName);

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Pokemon Page</h3>
            <div className={styles.buttonBox}>
                {typeList.map(type => (
                    <Link key={type} href={`pokemons/${type}`}>
                        <button className={styles.button}>{type}</button>
                    </Link>
                ))}
            </div>
        </div>
    );
}

//prefetch
//true: 페이지 접속 시 prefetch가 적용되어 있는 모든 링크는 바로 프리패칭을 함 (해당 페이지로 이동 시 HTML을 요청하지 않음)
//false: 페이지 접속 시 prefetch가 false인 링크는 프리패칭을 하지 않음 (접속 요청 시에 해당 페이지의 HTML을 요청)
//null(기본값): 링크 경로가 정적 페이지의 경우 프리 패칭을 함(해당 페이지로 이동 시 HTML을 요청X)
//링크 경로가 동적일 때도 프리패칭을 함. 단, 해당 페이지에 접속 시에 다시 데이터를 받아옴
//그러는 이유는 최신 상태의 데이터인지 체크하기 위해 다시 호출 (안정성을 챙김)
//프리패칭으로 빠른 UI를 랜더링하도록 하고,  다시 데이터를 호출해서 최신화된 데이터를 반영하는 방식
//prefetch가 true이면, 데이터를 다시 호출하지 않기 떄문에 데이터 변동 주기가 긴 곳에 true를 사용해야 한다.
//null 상태일 경우 동적 경로에 대해선 loading.js의 boundary와 가장 가까운 세그먼트까지만 프리패칭함

//참고) prefetch={false} 일때 hover 시 프리패칭이 일어나는건 pageRouter일때만. appRouter는 무조건 프리패칭X
