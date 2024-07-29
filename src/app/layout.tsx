import Link from 'next/link';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import QueryClientProviders from '@/components/common/queryClient/QueryClientProviders';
import { openGraphLocale } from '@/metadata/shared-metadata';

import './globals.css';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    //메타데이터Url은 반드시 배포용 Url로 적용
    metadataBase: new URL('https://nextjs-study-fpo2.vercel.app/'),
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
                        <Link href="/serverAction">
                            <button className={styles.button}>서버액션 페이지</button>
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

//동적 이미지 생서 (Dynamic Image Generation)
//ImageResponse 생성자: JSX + CSS를 사용해 동적 이미지를 생성하게 해주는 기능
//OpenGraph, TwitterCard 등의 소셜 미디어 이미지를 만드는데 사용된다.

//루트 세그먼트 내에 지정된 파일 이름으로 생성 시 자동 적용
//app/route.tsx => 전역으로 일반 동적 이미지 생성
//app/opengraph-image.tsx => 전역으로 오픈 그래프 이미지 생성
//app/segment/[slug]/opengraph-image.tsx => 해당 루트 세그먼트에서 오픈 그래프 이미지 생성
//app/twitter-image.tsx => 전역으로 트위터 카드 이미지 생성
//app/icon.tsx => 파비콘을 동적으로 생성
//파일은 컴포넌트가 new ImageResponse를 반환하는 형식으로 하며 컴포넌트는 반드시 export default 로 내보내야 한다.

//반드시 Edge RunTime을 사용해야됨
//적용할 수 있는 css 속성이 정해져있음
//최대 번들 크기는 500kb 이하로 적용. 초과해야 할 시 런타임에서 호출해야 한다.
//폰트는 되도록 ttf or otf 로 적용
