'use client';

import { useActionState } from 'react';
import { serverActionTodoUser } from '@/func/serverAction/serverActionExample';

import TextInput from '../common/textInput/TextInput';
import SquareBtn from '../common/button/SquareBtn';
import styles from './ClientC.module.css';

import type { TODOLIST_TYPES } from '@/api/type/todoType';

type Props = {
    onClick: () => Promise<TODOLIST_TYPES.UsetData[]>;
};

const ClientC = ({ onClick }: Props) => {
    const [state, action, ispending] = useActionState(serverActionTodoUser, null);

    return (
        <form action={action} className={styles.form}>
            <TextInput name="userId" disabled={ispending} />
            <SquareBtn className={styles.button} disabled={ispending}>
                제출
            </SquareBtn>
        </form>
    );
};

export default ClientC;
