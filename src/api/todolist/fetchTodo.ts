import { TODOLIST_TYPES } from '../type/todoType';

type TodoUserListType = TODOLIST_TYPES.UsetData[];
export const fetchTodoUserList = async (id?: string): Promise<TodoUserListType> => {
    const userId = id ? `?id=${id}` : '';
    const result = await fetch(`https://jsonplaceholder.typicode.com/users${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());

    return result;
};

type TodoPostListType = TODOLIST_TYPES.PostData[];
export const fetchTodoPostList = async (id?: string): Promise<TodoPostListType> => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());

    return result;
};
