import CaslLogin from '@/components/casl/login/CaslLogin';
import CaslPostList from '@/components/casl/post/CaslPostList';
import styles from './casl.module.css';

interface Props {
    searchParams: { page: string };
}

export default function CaslPage({ searchParams }: Props) {
    return (
        <div className={styles.container}>
            <CaslLogin />
            <CaslPostList page={searchParams.page} />
        </div>
    );
}
