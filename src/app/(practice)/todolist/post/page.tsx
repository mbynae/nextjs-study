import { Suspense } from 'react';
import styles from './post.module.css';
import PostList from '@/components/todolist/PostList';
import Loading from '@/components/common/loading/Loading';
import QueryClientProviders from '@/components/common/queryClient/QueryClientProviders';

type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
};

export default function Post({ searchParams }: Props) {
    // console.log(searchParams);
    return (
        <>
            <h4 className={styles.subTitle}>게시글 데이터</h4>
            <div className={styles.subBox}>
                <Suspense fallback={<Loading text="로딩중입니다..." />}>
                    <QueryClientProviders>
                        <PostList />
                    </QueryClientProviders>
                </Suspense>
            </div>
        </>
    );
}
