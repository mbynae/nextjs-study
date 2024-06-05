import BackButton from '@/components/common/button/BackButton';
import { fetchTodoUserList } from '@/api/todolist/fetchTodo';
import styles from './page.module.css';

export default async function notFound() {
    const data = await fetchTodoUserList();

    return (
        <div className={styles.notFound}>
            <span>현재 페이지가 존재하지 않음</span>
            <span className={styles.mb20}>그러니까 돌아가</span>
            <BackButton>뒤로가기 by {data[0].name}</BackButton>
        </div>
    );
}
