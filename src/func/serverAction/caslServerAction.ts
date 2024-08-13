'use server';
import { fetchTodoUserList } from '@/api/todolist/fetchTodo';
import type { TODOLIST_TYPES } from '@/api/type/todoType';

type ProfileData = (TODOLIST_TYPES.UsetData & TODOLIST_TYPES.UserLogin) | { isLoggedIn: false };
export async function caslLogin(data: { id: string; password: string }): Promise<ProfileData> {
    const userListData = await fetchTodoUserList();
    const userList = userListData.map((user) => user.username);

    if (userList.includes(data.id) && data.password === '1111') {
        const user = userListData.find((list) => list.username === data.id);
        const type = user?.id === 1 ? 'ADMIN' : 'COMMON';
        return { isLoggedIn: true, type: type, ...user! };
    }
    return { isLoggedIn: false };
}
