import React from 'react';
import styles from './Loading.module.css';

export default function Loading({ text }: { text: string }) {
    return <div className={styles.container}>{text}</div>;
}
