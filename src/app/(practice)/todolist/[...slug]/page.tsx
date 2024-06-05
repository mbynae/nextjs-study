import { fetchTodoUserList } from '@/api/todolist/fetchTodo';
import styles from '../todolist.module.css';

type Props = {
    params: {
        slug: string;
    };
};

export default async function TodoNumber({ params }: Props) {
    const userdata = await fetchTodoUserList(params.slug);

    return (
        <>
            <h4 className={styles.subTitle}>유저 데이터</h4>
            {console.log(userdata.id)}
            <div className={styles.subBox}></div>
        </>
    );
}

export async function generateStaticParams() {
    const userList = await fetchTodoUserList();
    return [{ slug: userList.map((user: { id: number }) => user.id.toString()) }];
}
