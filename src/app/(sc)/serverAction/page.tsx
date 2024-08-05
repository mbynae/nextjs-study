import { fetchTodoUserList } from '@/api/todolist/fetchTodo';
import ClientC from '@/components/sc/ClientC';

export default function ServerAction() {
    async function serverActionFn() {
        'use server';
        const result = await fetchTodoUserList('2');
        return result;
    }

    return <ClientC onClick={serverActionFn} />;
}

//서버액션은 서버 컴포넌트 혹은 'use server' 지시어를 사용하는 파일에서 함수를 생성할 수 있음
//생성된 함수는 클라이언트 컴포넌트로 보내 이벤트로 서버액션을 실행함

//서버액션을 통해 받은 리턴값을 클라이언트 컴포넌트에서 활용 가능
//startTransition을 사용해 진행 상태 체크 가능

//form 액션을 통해서도 서버액션 실행 가능
//useActionState를 통해 액션 보류상태, 반횐된 응답을 엑세스 가능
//또한 하이드레이션이 완료되기 전에 앱과 상호작용이 가능해진다
//useActionState의 세번째 옵션(permalink)으로 자바스크립트 번들이 로드되기 전에 form action 제출 시 peramlink 주소로 리다이렉트 가능
//동일한 폼 컴포넌트가 있는 동적 페이지에서 사용됨
//자바스크립트 번들이 로드되기 전에 form이 제출되면 현재 url에서 처리가 되는데 이것을 서버 액션을 통해 서버에서 폼데이터를 제출하며, peramlink 주소에서 진행시킬 수 있음
//자바스크립트 하이드레이션이 완료되면 이 기능은 무시되고 자바스크립트에서 form을 핸들링함
