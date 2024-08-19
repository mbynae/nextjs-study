import { CASL_TYPES } from '@/types/casl-type';
import { defineAbility } from '@casl/ability';

interface User extends CASL_TYPES.UserData {}

const ability = (user: User) =>
    defineAbility((can, cannot) => {
        can('read', 'Post');
        cannot('read', 'Post', { display: 'N' });

        if (user.isLoggedIn) {
            can('read', 'Post', { display: 'N', userNum: user.number });
        }
    });

export default ability;
