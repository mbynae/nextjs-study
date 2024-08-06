'use client';
import { useInputHandler } from '@/hooks/useEventHandler';

import SquareBtn from '../common/button/SquareBtn';
import styles from './CaslLogin.module.css';
import { caslLogin } from '@/func/serverAction/caslServerAction';
import { useActionState } from 'react';

// async function increment(previousState: number, formData: any) {
//     return previousState + 1;
// }

const CaslLogin = () => {
    const [value, onValueInput] = useInputHandler({ id: '', password: '' });
    // const [state, submitAction, isPending] = useActionState(() => {}, null);
    // console.log(`state: ${state}, isPending: ${isPending}`);

    const loginHandler = async () => {
        const result = await caslLogin(value);
        console.log(result);
    };

    return (
        <form className={styles.loginBox} action={loginHandler}>
            <legend className={styles.loginTitle}>로그인</legend>
            <div className={styles.container}>
                <div className={styles.inputBox}>
                    <label className={styles.label}>
                        <h5>아이디</h5>
                        <input
                            type="text"
                            placeholder="아이디 입력"
                            value={value.id}
                            onChange={onValueInput}
                            name="id"
                            className={styles.input}
                        />
                    </label>
                    <label className={styles.label}>
                        <h5>비밀번호</h5>
                        <input
                            type="password"
                            placeholder="패스워드 입력"
                            value={value.password}
                            onChange={onValueInput}
                            name="password"
                            className={styles.input}
                        />
                    </label>
                </div>
                <SquareBtn className={styles.loginBtn}>로그인</SquareBtn>
            </div>
        </form>
    );
};

export default CaslLogin;
