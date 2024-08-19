import { HTMLProps, useMemo } from 'react';
import styles from './Label.module.css';
import { COMMON_CSS } from '@/types/common-type';

interface Props extends HTMLProps<HTMLLabelElement>, COMMON_CSS {
    text: string;
    children: React.ReactNode;
    focus?: boolean;
    labelClassName?: string;
    textClassName?: string;
}

export default function Label({ text, children, focus = true, w, h, p, fz, fw, style, labelClassName, textClassName, ...props }: Props) {
    const labelStyle = useMemo(() => [styles.label, focus && styles.focus, labelClassName].join(' '), [focus, labelClassName]);
    const textStyle = useMemo(() => [styles.text, textClassName].join(' '), [textClassName]);
    const css = useMemo(() => ({ width: w, height: h, padding: p, fontSize: fz, fontWeight: fw, ...style }), [w, h, p, fz, fw]);

    return (
        <label className={labelStyle} {...props} style={css}>
            <h5 className={textStyle}>{text}</h5>
            {children}
        </label>
    );
}
