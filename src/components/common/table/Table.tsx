'use client';

import { createContext, HTMLProps, useContext, useMemo } from 'react';
import styles from './Table.module.css';

interface Props extends HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
    col?: number[];
}

const Context = createContext<{ col?: number[] }>({ col: undefined });
const IndexContext = createContext<{ index?: number }>({ index: undefined });

export default function Table({ children, col = [], className, ...props }: Props) {
    const tableStyle = useMemo(() => [styles.table, className].join(' '), [className]);

    return (
        <Context.Provider value={{ col: col }}>
            <div className={tableStyle} role="table" {...props}>
                {children}
            </div>
        </Context.Provider>
    );
}

export function TableHeader({ children, className, ...props }: Props) {
    const tableStyle = useMemo(() => [styles.tableHeader, className].join(' '), [className]);

    return (
        <div className={tableStyle} role="row" {...props}>
            {(children as React.ReactNode[]).map((child: React.ReactNode, index: number) => (
                <IndexContext.Provider key={index} value={{ index: index }}>
                    {child}
                </IndexContext.Provider>
            ))}
        </div>
    );
}

export function HeaderCell({ children, flex, className, ...props }: Props & { flex?: number }) {
    const tableStyle = useMemo(() => [styles.headerCell, className].join(' '), [className]);

    const col = useContext(Context).col;
    const index = useContext(IndexContext).index;
    const flexStyle = useMemo(() => (col ? col[index ?? 0] : flex), [col, index, flex]);

    return (
        <div className={tableStyle} style={{ flex: flexStyle }} role="columnheader" {...props}>
            {children}
        </div>
    );
}

export function TableBody({ children, className, ...props }: Props) {
    const tableStyle = useMemo(() => [styles.tableBody, className].join(' '), [className]);

    return (
        <div className={tableStyle} role="row" {...props}>
            {(children as React.ReactNode[]).map((child: React.ReactNode, index: number) => (
                <IndexContext.Provider key={index} value={{ index: index }}>
                    {child}
                </IndexContext.Provider>
            ))}
        </div>
    );
}

export function BodyCell({ children, flex, className, ...props }: Props & { flex?: number }) {
    const tableStyle = useMemo(() => [styles.bodyCell, className].join(' '), [className]);

    const col = useContext(Context).col;
    const index = useContext(IndexContext).index;
    const flexStyle = useMemo(() => (col ? col[index ?? 0] : flex), [col, index, flex]);

    return (
        <div className={tableStyle} style={{ flex: flexStyle }} role="cell" {...props}>
            {children}
        </div>
    );
}
