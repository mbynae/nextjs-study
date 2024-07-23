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
//useActionState의 옵션으로 리다이렉트 가능
