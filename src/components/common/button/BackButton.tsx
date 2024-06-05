'use client';

import { useRouter } from 'next/navigation';
import styles from './BackButton.module.css';

type Props = {
    children: React.ReactNode;
};

export default function BackButton({ children }: Props) {
    const router = useRouter();

    const toBackHandler = () => {
        router.back();
    };

    return (
        <button className={styles.button} onClick={toBackHandler}>
            {children}
        </button>
    );
}
