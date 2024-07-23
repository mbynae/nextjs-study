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
