'use server';

import { fetchTodoUserList } from '@/api/todolist/fetchTodo';

export async function serverActionTodoUser(id: string) {
    const result = await fetchTodoUserList(id);
    console.log(result);
    return result;
}
