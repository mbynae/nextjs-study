import { ForwardedRef, forwardRef } from 'react';
import styles from './BackButton.module.css';

interface Props {
    href?: string;
    children: React.ReactNode;
}

 const LinkButton = forwardRef<ForwardedRef<HTMLAnchorElement>, Props>({ href, children }, ref) => {
    return (
        <a href={href} className={styles.linkButton}>
            {children}
        </a>
    );
}

export default LinkButton;