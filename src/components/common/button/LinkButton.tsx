import styles from './BackButton.module.css';

type Props = {
    href: string;
};

export default function LinkButton({ href }: Props) {
    return (
        <a href={href} className={styles.linkButton}>
            링크 버튼
        </a>
    );
}
