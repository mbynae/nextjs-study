'use client';

import { useCaslLoginData } from '@/store/casl/loginStore';
import { compose } from '@/func/common/compose';

import SquareBtn from '@/components/common/button/SquareBtn';
import styles from './CaslLogin.module.css';

interface Props {
    resetValue: () => void;
}

const CaslProfile = ({ resetValue }: Props) => {
    //state value
    const id = useCaslLoginData((state) => state.id);
    const name = useCaslLoginData((state) => state.name);
    const type = useCaslLoginData((state) => state.type);

    //event handler
    const logout = useCaslLoginData((state) => state.logout);
    const logoutHandler = compose(resetValue, logout);

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profile}>
                <span>id: {id}</span>
                <span>/</span>
                <span>name: {name}</span>
                <span>/</span>
                <span>type: {type}</span>
            </div>
            <SquareBtn type="button" onClick={() => logoutHandler()} className={styles.loginBtn}>
                로그아웃
            </SquareBtn>
        </div>
    );
};

export default CaslProfile;
