'use client';

import Link from 'next/link';
import { useCaslLoginData } from '@/store/casl/loginStore';
import { Post } from '@/func/casl/entities';
import { CASL_POSTDATA } from '@/enums/casl';
import defineAbilityFor from '@/func/casl/defineAbility';

import SquareBtn from '@/components/common/button/SquareBtn';
import styles from './CaslPostList.module.css';
import { readPost } from '@/func/casl/postControl';

interface Props {
    page: string;
}

const CaslPostList = ({ page }: Props) => {
    const hydrate = useCaslLoginData((state) => state._hasHydrated);

    const pageLength = Math.floor(CASL_POSTDATA.length / 10);
    const pages = Array.from({ length: pageLength }, (_, i) => i + 1);
    const lastData = parseInt(page) * 10;
    const firstData = lastData - 10;
    const postData = CASL_POSTDATA.slice(firstData, lastData);

    const userData = useCaslLoginData((state) => state.allGetState());
    const ability = defineAbilityFor(userData);

    // const readPost = (display: string, userNum: number) => {
    //     const PostData = new Post({ display: display, userNum: userNum });
    //     return ability.can('read', PostData);
    // };

    const readPostFn = readPost(ability);

    return (
        <section className={styles.section}>
            <div className={styles.titleBox}>
                <h3 className={styles.sectionTitle}>게시판</h3>
                <SquareBtn className={styles.writeBtn}>게시글 등록</SquareBtn>
            </div>
            <div className={styles.postBox}>
                <div className={styles.table} role="table">
                    <div className={styles.tableHeader} role="row">
                        <div className={styles.headerCell} role="columnheader">
                            No
                        </div>
                        <div className={styles.headerCell} role="columnheader">
                            제목
                        </div>
                        <div className={styles.headerCell} role="columnheader">
                            작성자
                        </div>
                        <div className={styles.headerCell} role="columnheader">
                            공개여부
                        </div>
                    </div>

                    {!hydrate && (
                        <div className={styles.loading} role="row">
                            LOADING...
                        </div>
                    )}

                    {hydrate &&
                        postData.map((post) => (
                            <div key={post.id} className={styles.tableBody} role="row">
                                <div className={styles.bodyCell} role="cell">
                                    {post.id}
                                </div>
                                <div
                                    className={styles.bodyCell}
                                    role="cell"
                                    style={{ color: readPostFn(post.display, post.userNum) ? undefined : '#cdcdcd' }}
                                >
                                    {readPostFn(post.display, post.userNum) ? post.title : '비공개 글입니다'}
                                </div>
                                <div className={styles.bodyCell} role="cell">
                                    {post.userName}
                                </div>
                                <div className={styles.bodyCell} role="cell">
                                    {post.display}
                                </div>
                            </div>
                        ))}
                </div>
                <div className={styles.pagenation}>
                    {pages.map((pageNum) => (
                        <Link key={pageNum} href={`?page=${pageNum}`}>
                            <button className={styles.pageBtn} style={{ color: pageNum === parseInt(page) ? '#3f5de7' : undefined }}>
                                {pageNum}
                            </button>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaslPostList;
