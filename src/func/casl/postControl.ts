import { Post } from './entities';

export const readPost = (ability: any) => (display: string, userNum: number) => {
    const PostData = new Post({ display: display, userNum: userNum });
    return ability.can('read', PostData);
};
