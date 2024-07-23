import { TODOLIST_TYPES } from '@/api/type/todoType';
import styles from './ServerC.module.css';

type Props = {
    data: TODOLIST_TYPES.UsetData[];
};

const ServerC = ({ data }: Props) => {
    return <div className={styles.container}></div>;
};

export default ServerC;
