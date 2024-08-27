'use client';

import { useActionState, useState, useTransition } from 'react';
import { increaseServerAction, serverActionTodoUser } from '@/func/serverAction/serverActionExample';

import TextInput from '../common/textInput/TextInput';
import SquareBtn from '../common/button/SquareBtn';
import styles from './ClientC.module.css';

import type { TODOLIST_TYPES } from '@/api/type/todoType';

type Props = {
    onClick: () => Promise<TODOLIST_TYPES.UsetData[]>;
};

const ClientC = ({ onClick }: Props) => {
    const [state, action, ispending] = useActionState(serverActionTodoUser, null);

    const [count, setCount] = useState(0);
    const [isPending, startTransition] = useTransition();

    const increaseAction = async () => {
        startTransition(async () => {
            const result = await increaseServerAction(count);
            setCount(result);
        });
    };

    console.log(state);
    return (
        <form action={action} className={styles.form}>
            {!state && <span className={styles.defaultState}>값을 입력해주세요.</span>}
            <div className={styles.group}>
                <TextInput name="userId" disabled={ispending} defaultValue={count} />
                <SquareBtn className={styles.button} disabled={ispending}>
                    제출
                </SquareBtn>
            </div>
            <div className={styles.inceeaseGroup}>
                <span>초기번호: {count}</span>
                <SquareBtn formAction={increaseAction} disabled={isPending}>
                    증가 버튼
                </SquareBtn>
            </div>
        </form>
    );
};

export default ClientC;
