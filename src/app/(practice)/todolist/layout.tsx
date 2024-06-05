import styles from './todolist.module.css';

type Props = {
    children: React.ReactNode;
};

export default function TodoLayout({ children }: Props) {
    return (
        <div className={styles.layout}>
            <h3 className={styles.title}>TodoList Page</h3>
            <div className={styles.container}>{children}</div>
        </div>
    );
}
