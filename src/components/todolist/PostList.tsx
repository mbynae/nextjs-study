'use client';

import { usePostListQuery } from '@/api/todolist/useTodoQuery';
import { notFound, useSearchParams } from 'next/navigation';

import Head from 'next/head';
import styles from './PostList.module.css';

const PostList = () => {
    const searchParams = useSearchParams();
    const userId = searchParams.get('userId');

    const postdata = usePostListQuery({ id: userId! });

    if (!postdata || postdata.length === 0) {
        return (
            <>
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>
                {notFound()}
            </>
        );
    }

    return (
        <ul className={styles.postBox}>
            {postdata.map(post => (
                <li key={post.id} className={styles.postList}>
                    <span className={styles.text}>{post.id}. </span>
                    <span className={styles.text}>{post.title}</span>
                </li>
            ))}
        </ul>
    );
};

export default PostList;
