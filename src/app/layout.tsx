import Link from 'next/link';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { openGraphLocale } from '@/metadata/shared-metadata';

import './globals.css';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    //메타데이터Url은 반드시 배포용 Url로 적용
    metadataBase: new URL('https://nextjs-study-fpo2.vercel.app'),
    title: 'Next.js 연습용 프로젝트',
    description: 'Next.js 공식문서 스터디 및 연습용 개인 프로젝트입니다.',
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'Next.js 연습용 프로젝트',
        description: 'Next.js 공식문서 스터디 및 연습용 개인 프로젝트입니다.',
        // images: ['/YellowPaper.webp'],
        ...openGraphLocale,
    },
};

//rootLayout.tsx
//모든 페이지가 공유하는 최상위 레이아웃
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={inter.className} suppressHydrationWarning={true}>
                <header className={styles.header}>
                    <nav className={styles.nav}>
                        <Link href="/pokemons" replace scroll={false}>
                            <button className={styles.button}>포켓몬 페이지</button>
                        </Link>
                        <Link href="/todolist">
                            <button className={styles.button}>투두리스트 페이지</button>
                        </Link>
                        <Link href="/client" scroll={false}>
                            <button className={styles.button}>CSR 컴포넌트 페이지</button>
                        </Link>
                        <Link href="/serverAction">
                            <button className={styles.button}>서버액션 페이지</button>
                        </Link>
                        <Link href="/casl?page=1">
                            <button className={styles.button}>casl 페이지</button>
                        </Link>
                        <Link href="/notRoute">
                            <button className={styles.button}>뒤로가기 페이지</button>
                        </Link>
                    </nav>
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
}
