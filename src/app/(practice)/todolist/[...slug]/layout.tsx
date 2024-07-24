import { openGraphLocale } from '@/metadata/shared-metadata';
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
            title: `${params.slug}번 유저의 개인정보`,
            description: `jsonplaceholder 사이트의 예시 api를 활용한 데이터 호출 페이지입니다.`,
            images: ['/nextjsIcon.png', ...prevImage],
            ...openGraphLocale,
        },
    };
}

//app/todolist/[...slug]/layout.tsx
//이 파일로 오기까지의 모든 동적 세그먼트를 params로 받는다.
const layout = ({ children, params }: Props) => {
    return <div>{children}</div>;
};

export default layout;

//-파일 기반 메타데이터
//특정 파일을 통해 메타데이터를 적용
//파일 기반 메타데이터는 설정 기반 메타데이터보다 더 높은 우선순위를 가짐 => 덮어쓴다.

//-작동 방식
//기본 설정
//<meta charset />과 <meta name="viewport" />는 기본적으로 설정이 되어 있음 (각각 문자열 인코딩, 기기에 따른 웹사이트의 뷰포트 너비와 스케일 조정)
//뷰포트 메타 태그는 덮어쓸 수 있다.

//적용 순서 및 병합
//루트 레이아웃 => 페이지 레이아웃 => 페이지 순서대로 메타 태그 평가
//따라서 뒤에서 쓴 중복된 필드는 앞의 것을 덮어쓴다.
//중복되지 않는 필드는 부모의 필드를 상속받음
//openGraph같은 하나의 필드는 안의 속성을 한번에 통째로 덮어써버림(부모 og에 images가 있고 자식 og에 images가 없으면 images 속성이 사라짐)
//별도의 파일에 변수로 필드를 만들어 필드를 공유하는 방법이 있다.
