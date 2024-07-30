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

//Linked Data
//웹 상에 존재하는 데이터를 개별 URI로 식별하고, 각 URI에 링크 정보를 부여함으로써 상호 연결된 웹을 지향하는 모형
//메타 데이터는 데이터를 설명하는 데이터이고 광범위하고 쉽게 적용할 수 있는 대신 데이터간의 관계를 설명하지 못하는 단점이 존재함
//링크드 데이터는 기계에게 데이터간의 관계도 설명할 수 있다는 장점이 존재하지만 HTML에 직접 입력해야 하며, 사용법이 좀 더 어렵다는 단점이 존재

//링크드 데이터의 4가지 원칙
//- URI의 사용
//- HTTP URI의 사용
//- RDF의 사용
//- 링크정보의 부여

//JSON-LD
//JSON을 사용해 링크드 데이터를 인코딩하는 방식
//개발자가 읽고 쓰기 쉬운 JSON을 링크드데이터로 변환하기 위해 고안
//HTML 안의 script 태그에 적용한다.
//type: application/json+ld
//리액트에선 dangerouslySetInnerHTML={{__html: JSON.stringify(jsonld)}} 속성을 사용해 json 데이터를 입력
//next.js에서 layout.tsx, page.tsx 컴포넌트에서 script 태그로 구조화된 데이터를 랜더링하는 방식이 권장됨
//Google의 Rich Results Test 페이지에서 테스트 가능

//사용법
//- "@context": JSON-LD의 컨텍스트를 정의. 사용되는 용어와 속성들의 의미를 지정하며, 주로 사용하는 어휘의 url을 지정한다.
//- "https://schema.org": 컨텍스트가 schema.org 어휘를 사용한다는 것을 뜻함

//- "@type": 설명하는 리소스의 유형을 지정. 즉, 객체가 어떤 종류의 타입인지를 정의함

//- "@id": 리소스의 고유 식별자를 제공. 객체에 대한 전역적으로 고유한 식별자(url)를 지정함. 지정하게 된 후 다른 JSON-LD 문서에서 이 객체를 참조 가능
