import styles from './errorPage.module.css';

type Props = {
    children: React.ReactNode;
};

const ErrorPageLayout = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>여기는 에러 페이지입니다.</h4>
            {children}
        </div>
    );
};

export default ErrorPageLayout;
