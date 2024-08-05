'use client';

import { serverActionTodoUser } from '@/func/serverAction/serverActionExample';
import styles from './ClientC.module.css';

type Props = {
    onClick: () => void;
};

const ClientC = ({ onClick }: Props) => {
    return (
        // <button onClick={() => onClick()} className={styles.button}>
        <button onClick={() => serverActionTodoUser('3')} className={styles.button}>
            서버 액션 버튼
        </button>
    );
};

export default ClientC;
