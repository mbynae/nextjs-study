import Link from 'next/link';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import styles from './page.module.css';
import QueryClientProviders from '@/components/common/queryClient/QueryClientProviders';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Next.js 연습용 프로젝트',
    description: 'Next.js 공식문서 스터디 및 연습용 개인 프로젝트입니다.',
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
            <body className={inter.className}>
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
                        <Link href="/notRoute">
                            <button className={styles.button}>뒤로가기 페이지</button>
                        </Link>
                    </nav>
                </header>

                <main>
                    <QueryClientProviders>{children}</QueryClientProviders>
                </main>
            </body>
        </html>
    );
}

//기본적으로 layout.js 는 서버 컴포넌트며, searchParams를 Props 받지 않음.
//공유 레이아웃은 페이지를 이동해도 레이아웃 범위 하에 있다면 랜더링되지 않기 때문에 상태가 변할 수 있는 searchParams를 받지 않는다.
//즉, 레이아웃을 공유하는 두 페이지간 이동 시 레이아웃은 랜더링되지 않고 children인 page UI만 랜더링 됨 (랜더링 최소화를 통해 성능 최적화)

//레이아웃에서 클라이언트 기능을 사용해야 한다면(useSearchParams 같은) 클라이언트 컴포넌트로 만들어야 한다.
//이 경우 페이지 이동 시 레이아웃도 같이 리랜더링됨

//루트 레이아웃
//app 폴더에 반드시 포함되어야 함
//루트 레이아웃에 <html>과 <body>가 반드시 정의되어야 하며, <title>, <meta> 같은 <head> 태그를 추가해선 안된다.
//대신 Metadata Api를 사용해야 함

//경로그룹 (root)폴더를 통해 여러 루트 레이아웃을 만들 수 있음
//이 경우 페이지 이동 시 레이아웃 파일이 변경되기 때문에 전체 페이지 로드 발생
//ex app/(shop)/layout.js => app/(marketing)/layout.js
