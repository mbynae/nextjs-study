'use server';

import { fetchTodoUserList } from '@/api/todolist/fetchTodo';
import { TODOLIST_TYPES } from '@/api/type/todoType';

export async function serverActionTodoUser(init: TODOLIST_TYPES.UsetData[] | null, formData: FormData) {
    const id = formData.get('userId') as string;

    if (!id) return null;

    const result = await fetchTodoUserList(id);
    return result;
}

export async function increaseServerAction(count: number) {
    return count + 1;
}
