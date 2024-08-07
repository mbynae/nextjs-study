'use client';
import { useInputHandler } from '@/hooks/useEventHandler';

import SquareBtn from '../common/button/SquareBtn';
import styles from './CaslLogin.module.css';
import { caslLogin } from '@/func/serverAction/caslServerAction';
import { CSSProperties, useActionState } from 'react';

const CaslLogin = () => {
    const [value, onValueInput] = useInputHandler({ id: '', password: '' });

    //startTransition을 활용한 서버액션
    // const [state, setState] = useState(false);
    // const [isPending, startTransition] = useTransition();

    // const loginHandler = async () => {
    //     startTransition(async () => {
    //         const result = await caslLogin(value);
    //         setState(result);
    //     });
    // };

    //useActionState를 활용한 서버액션
    const [state, submitAction, isPending] = useActionState(() => caslLogin(value), { isLoggedIn: false });

    const loadingStyle: CSSProperties | undefined = isPending ? { backgroundColor: '#eee', pointerEvents: 'none' } : undefined;

    return (
        <form className={styles.loginBox} action={submitAction}>
            <legend className={styles.loginTitle}>로그인</legend>
            <div className={styles.container} style={loadingStyle}>
                {isPending && (
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>로딩중...</div>
                )}
                {!isPending && (
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
                )}
                <SquareBtn className={styles.loginBtn}>로그인</SquareBtn>
            </div>
        </form>
    );
};

export default CaslLogin;
