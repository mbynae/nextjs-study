'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useScreenView } from '@/hooks/useScreenView';

import styles from './client.module.css';

export default function Page() {
    const router = useRouter();
    // const observer = useRef<HTMLButtonElement>(null);
    const observer = useRef<(HTMLButtonElement | null)[]>([]);

    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        //이동할 경로
        router.push(`/pokemons/normal/${e.currentTarget.name}`);
    };

    const onPrefetch = (entry: IntersectionObserverEntry) => {
        const route = (entry.target as HTMLButtonElement).name;
        router.prefetch(`/pokemons/normal/${route}`);
    };

    //IO를 적용한 HOOKS
    const { observerRef } = useScreenView(observer, onPrefetch, { threshold: 0.1 });

    return (
        <div className={styles.buttonBox}>
            <button ref={observerRef(0)} className={styles.button} onClick={onClick} name="fire">
                노말/불 타입 포켓몬 페이지로 이동
            </button>
            <button ref={observerRef(1)} className={styles.button} onClick={onClick} name="water">
                노말/물 타입 포켓몬 페이지로 이동
            </button>
            <button ref={observerRef(2)} className={styles.button} onClick={onClick} name="grass">
                노말/풀 타입 포켓몬 페이지로 이동
            </button>
            <button ref={observerRef(3)} className={styles.button} onClick={onClick} name="flying">
                노말/비행 타입 포켓몬 페이지로 이동
            </button>
            <button ref={observerRef(4)} className={styles.button} onClick={onClick} name="electric">
                노말/전기 타입 포켓몬 페이지로 이동
            </button>
        </div>
    );
}
