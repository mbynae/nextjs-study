'use server';
import { fetchTodoUserList } from '@/api/todolist/fetchTodo';

export async function caslLogin(data: { id: string; password: string }) {
    const userListData = await fetchTodoUserList();
    const userList = userListData.map((user) => user.username);

    if (userList.includes(data.id) && data.password === '1111') {
        return true;
    }
    return false;
}
