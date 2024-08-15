'use client';

import { CSSProperties, useEffect, useLayoutEffect, useRef, useState, useTransition } from 'react';
import { useCaslLoginData } from '@/store/casl/loginStore';
import { useInputHandler } from '@/hooks/useEventHandler';
import { caslLogin } from '@/func/serverAction/caslServerAction';

import CaslLoginContents from './CaslLoginContents';
import CaslProfile from './CaslProfile';
import styles from './CaslLogin.module.css';

import type { CASL_TYPES } from '@/types/casl-type';

const CaslLogin = () => {
    //state
    const [hydrate, setHydrate] = useState(false);
    const [value, onValueInput, resetValue] = useInputHandler({ id: '', password: '' });
    const isLoggedIn = useCaslLoginData((state) => state.isLoggedIn);

    //event handler
    const [isPending, startTransition] = useTransition();

    const loginStateInput = useCaslLoginData((state) => state.dataInput);

    const submitHandler = async () => {
        startTransition(async () => {
            const result = await caslLogin(value);

            if (result.isLoggedIn) {
                const data: CASL_TYPES.UserData = {
                    number: result.id,
                    id: result.username,
                    isLoggedIn: result.isLoggedIn,
                    type: result.type,
                    name: result.name,
                    email: result.email,
                };

                loginStateInput(data);
            }
        });
    };

    useEffect(() => {
        setHydrate(true);
    }, []);

    //data Processing
    const loadingStyle: CSSProperties | undefined = isPending ? { backgroundColor: '#eee', pointerEvents: 'none' } : undefined;

    return (
        <form className={styles.loginBox} action={submitHandler}>
            <legend className={styles.loginTitle}>로그인</legend>
            <div className={styles.container} style={loadingStyle}>
                {!hydrate && <Loading />}
                {hydrate && !isLoggedIn && <CaslLoginContents isPending={isPending} value={value} onValueInput={onValueInput} />}
                {hydrate && isLoggedIn && <CaslProfile resetValue={resetValue} />}
            </div>
        </form>
    );
};

export default CaslLogin;

function Loading() {
    return (
        <div className={styles.loading} style={{ width: '100%', height: 27.6 }}>
            LOADING...
        </div>
    );
}
