'use client';

import styles from './ClientC.module.css';

type Props = {
    onClick: () => void;
};

const ClientC = ({ onClick }: Props) => {
    return (
        <button onClick={() => onClick()} className={styles.button}>
            서버 액션 버튼
        </button>
    );
};

export default ClientC;
