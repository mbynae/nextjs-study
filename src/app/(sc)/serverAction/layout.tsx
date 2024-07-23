import styles from './serverAction.module.css';

type Props = {
    children: React.ReactNode;
};

export default function layout({ children }: Props) {
    return <div className={styles.container}>{children}</div>;
}
