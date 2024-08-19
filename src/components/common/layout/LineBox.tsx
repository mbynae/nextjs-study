import { HTMLProps, useMemo } from 'react';
import styles from './LineBox.module.css';

interface Props extends HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
    w?: string | number;
    h?: string | number;
    p?: string;
    innerClassName?: string;
}

export default function LineBox({ children, w, h, p, className, style, innerClassName, ...props }: Props) {
    //data processing
    const containerStyle = useMemo(() => [styles.container, className].join(' '), [className]);
    const innerStyle = useMemo(() => [styles.inner, innerClassName].join(' '), [innerClassName]);
    const css = useMemo(() => ({ width: w, height: h, padding: p, ...style }), [w, h, p, style]);

    return (
        <div className={containerStyle} style={css} {...props}>
            <div className={innerStyle}>{children}</div>
        </div>
    );
}
