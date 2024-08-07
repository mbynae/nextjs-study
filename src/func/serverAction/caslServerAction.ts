'use server';
import { fetchTodoUserList } from '@/api/todolist/fetchTodo';

export async function caslLogin(data: { id: string; password: string }) {
    const userListData = await fetchTodoUserList();
    const userList = userListData.map((user) => user.username);

    if (userList.includes(data.id) && data.password === '1111') {
        const user = userListData.find((list) => list.username === data.id);
        return { isLoggedIn: true, ...user };
    }
    return { isLoggedIn: false };
}
