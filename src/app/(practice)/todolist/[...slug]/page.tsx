import { fetchTodoUserList } from '@/api/todolist/fetchTodo';
import Link from 'next/link';
import styles from '../todolist.module.css';

type Props = {
    params: {
        slug: string;
    };
};

export default async function TodoNumber({ params }: Props) {
    const userdata = await fetchTodoUserList(params.slug);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'user',
        id: userdata[0]?.id,
        name: userdata[0]?.name,
        address: userdata[0]?.address,
        phone: userdata[0]?.phone,
        email: userdata[0]?.email,
        website: userdata[0]?.website,
        company: userdata[0]?.company,
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <h4 className={styles.subTitle}>유저 데이터</h4>
            <div className={styles.subBox}>
                {userdata.map(user => (
                    <ul key={user.id} className={styles.userInfoBox}>
                        <li className={styles.userInfo}>id: {user.id}</li>
                        <li className={styles.userInfo}>name: {user.name}</li>
                        <li className={styles.userInfo}>address: {user.address.city}</li>
                        <li className={styles.userInfo}>phone: {user.phone}</li>
                        <li className={styles.userInfo}>email: {user.email}</li>
                        <li className={styles.userInfo}>website: {user.website}</li>
                        <li className={styles.userInfo}>company: {user.company.name}</li>
                        <Link href={`/todolist/post?userId=${user.id}`}>
                            <button className={styles.postButton}>게시글 목록</button>
                        </Link>
                    </ul>
                ))}
            </div>
        </>
    );
}

export async function generateStaticParams() {
    const userList = await fetchTodoUserList();
    return [{ slug: userList.map((user: { id: number }) => user.id.toString()) }];
}
