import { HTMLProps, useMemo } from 'react';
import styles from './TextInput.module.css';

interface Props extends HTMLProps<HTMLInputElement> {
    type?: 'default';
    w?: string | number;
    h?: string | number;
    p?: string | number;
    fz?: string | number;
    fw?: string | number;
}

export default function TextInput({
    type = 'default',
    value,
    onChange,
    name,
    placeholder,
    className,
    w,
    h,
    p,
    fz,
    fw,
    style,
    ...props
}: Props) {
    const inputStyle = useMemo(() => [styles.input, className].join(' '), [className]);
    const css = useMemo(() => ({ width: w, height: h, padding: p, fontSize: fz, fontWeight: fw, ...style }), [w, h, p, fz, fw]);

    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            className={inputStyle}
            style={css}
            {...props}
        />
    );
}
