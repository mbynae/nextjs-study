'use client';

import { caslLoginInit, useCaslLoginData } from '@/store/casl/loginStore';
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
    // const reset = useCaslLoginData.getInitialState();

    //event handler
    const dataInput = useCaslLoginData((state) => state.dataInput);

    const logoutHandler = () => {
        localStorage.removeItem('userData');
        compose(resetValue, dataInput)(caslLoginInit);
    };

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profile}>
                <span>id: {id}</span>
                <span>/</span>
                <span>name: {name}</span>
                <span>/</span>
                <span>type: {type}</span>
            </div>
            <SquareBtn type="button" onClick={logoutHandler} className={styles.logoutBtn}>
                로그아웃
            </SquareBtn>
        </div>
    );
};

export default CaslProfile;
