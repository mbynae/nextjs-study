import { ButtonHTMLAttributes, DetailedHTMLProps, useMemo } from 'react';
import styles from './button.module.css';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
}

const SquareBtn = ({ children, className, ...props }: Props) => {
    const style = useMemo(() => `${styles.button} ${className}`, [className]);

    return (
        <button {...props} className={style}>
            {children}
        </button>
    );
};

export default SquareBtn;
