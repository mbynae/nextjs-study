import Link from 'next/link';
import styles from './errorPage.module.css';

export default function ErrorPage() {
    return (
        <div className={styles.contents}>
            <p>페이지 랜더링 작업 중 예상치 못한 에러가 발생했을 때 이 페이지로 이동합니다.</p>
            <Link href="/">
                <button className={styles.button}>메인 페이지로 이동</button>
            </Link>
        </div>
    );
}
