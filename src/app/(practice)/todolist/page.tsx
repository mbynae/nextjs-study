import Link from 'next/link';
import styles from './todolist.module.css';

export default function Todolist() {
    const userNum = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <>
            <h4 className={styles.subTitle}>유저 선택</h4>
            <div className={styles.buttonBox}>
                {userNum.map(num => (
                    <Link key={num} href={`todolist/${num}`}>
                        <button className={styles.button}> {num}</button>
                    </Link>
                ))}
            </div>
        </>
    );
}
