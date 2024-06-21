import BackButton from '@/components/common/button/BackButton';
import styles from './page.module.css';

export default function notFoundComponent() {
    return (
        <div className={styles.notFound}>
            <span>현재 페이지가 존재하지 않음</span>
            <span className={styles.mb20}>그러니까 돌아가</span>
            <BackButton>뒤로가기</BackButton>
        </div>
    );
}
