'use client';

import SquareBtn from '../../common/button/SquareBtn';
import styles from './CaslLogin.module.css';

interface Props {
    isPending: boolean;
    value: { id: string; password: string };
    onValueInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CaslLoginContents = ({ isPending, value, onValueInput }: Props) => {
    return (
        <>
            {isPending && <div className={styles.loading}>로딩중...</div>}
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
        </>
    );
};

export default CaslLoginContents;
