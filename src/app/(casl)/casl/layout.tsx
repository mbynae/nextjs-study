import { fetchTodoUserList } from '@/api/todolist/fetchTodo';
import styles from './casl.module.css';

interface Props {
    children: React.ReactNode;
}

export default async function layout({ children }: Props) {
    const userList = await fetchTodoUserList();

    return (
        <section className={styles.wrap}>
            <h4 className={styles.userListTitle}>User List</h4>
            <div className={styles.userListBox}>
                <ul className={styles.userList}>
                    {userList.map((list) => (
                        <li key={list.id} className={styles.userInfo}>
                            <span className={styles.userOrder}>{list.id}. </span>
                            <div className={styles.account}>
                                <span className={styles.userId}>id: {list.username}</span>
                                <span className={styles.userEmail}>email: {list.email}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {children}
        </section>
    );
}
