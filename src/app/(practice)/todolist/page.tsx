import Link from 'next/link';
import styles from './todolist.module.css';

export default async function Todolist() {
    const numArr = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <>
            <article className={styles.article}>
                <h4 className={styles.subTitle}>유저 선택</h4>
                <div className={styles.buttonBox}>
                    {numArr.map((num) => (
                        <Link key={num} href={`/todolist/${num}`}>
                            <button className={styles.button}> {num}</button>
                        </Link>
                    ))}
                </div>
            </article>
            <article className={styles.article}>
                <h4 className={styles.subTitle}>게시글 선택</h4>
                <div className={styles.buttonBox}>
                    {numArr.map((num) => (
                        <Link key={num} href={`/todolist/post?userId=${num}`}>
                            <button className={styles.button}> {num}</button>
                        </Link>
                    ))}
                </div>
            </article>
        </>
    );
}
