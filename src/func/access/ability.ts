import { defineAbility } from '@casl/ability';

export default (user: { id: number; isLoggedIn?: boolean; isModerator?: boolean }) =>
    defineAbility((can, cannot) => {
        can('read', 'Article');
        can('update', 'Article', ['title', 'description'], { authorId: user.id });

        // if (user.isLoggedIn) {
        //     can('update', 'Article', { authorId: user.id });
        //     can('create', 'Comment');
        //     can('update', 'Comment', { authorId: user.id });
        // }
        if (user.isModerator) {
            can('update', 'Article', ['published']);
        }
    });
