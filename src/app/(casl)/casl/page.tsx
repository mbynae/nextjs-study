import CaslLogin from '@/components/casl/CaslLogin';
import styles from './casl.module.css';

export default function page() {
    return (
        <div className={styles.container}>
            <CaslLogin />
        </div>
    );
}
