import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchTodoPostList } from './fetchTodo';

export const usePostListQuery = (params: { id: string }) => {
    const { data } = useSuspenseQuery({
        queryKey: ['post', params.id],
        queryFn: () => fetchTodoPostList(params.id),
        refetchOnWindowFocus: false,
        retry: 3,
    });

    return data;
};
