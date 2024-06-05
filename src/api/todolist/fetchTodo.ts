export const fetchTodoUserList = async (id?: string) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/?${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(res => res.json());

    return result;
};
