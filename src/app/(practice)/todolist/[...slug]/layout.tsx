import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
    children: React.ReactNode;
    params: { slug: string[] };
};

export async function generateMetadata({ params }: Pick<Props, 'params'>, parent: ResolvingMetadata): Promise<Metadata> {
    const prevImage = (await parent).openGraph?.images || [];

    return {
        title: `${params.slug}번 유저의 개인정보`,
        description: `jsonplaceholder 사이트의 예시 api를 활용한 데이터 호출 페이지입니다.`,
        openGraph: {
            images: ['/nextjsIcon.png', ...prevImage],
        },
    };
}

//app/todolist/[...slug]/layout.tsx
//이 파일로 오기까지의 모든 동적 세그먼트를 params로 받는다.
const layout = ({ children, params }: Props) => {
    return <div>{children}</div>;
};

export default layout;

// 정적, 동적(generateMetadata) 메타데이터 모두 서버 컴포넌트에서만 지원
// generateMetadata 내부의 fetch가 완료된 후 UI를 클라이언트로 전송 => response의 첫 부분에 <head> 태그가 포함되도록 보장됨

// parent params: 부모 메타데이터를 받아오는 매개변수. parent를 통해 부모 메타데이터를 병합하거나 확장이 가능.
// parent의 타입은 ResolvingMetadata

// openGraph: 리치 프리뷰를 생성하는데 메타데이터 규격. Open Graph 프로토콜이라고 함
// openGraph 객체에는 아래 속성이 포함:
// title: 콘텐츠의 제목
// description: 콘텐츠에 대한 간단한 설명
// url: 콘텐츠의 캐노니컬 URL
// images: 콘텐츠와 연관된 이미지 URL 배열
// siteName: 웹사이트의 이름
// locale: 콘텐츠의 언어
// type: 콘텐츠의 유형(예: 웹사이트, 기사, 비디오 등)

// 리치 프리뷰(Rich Preview): 웹페이지를 공유할 떄 제목과 url에 추가로 시각적인 요소와 메타데이터를 표시하는 기능
