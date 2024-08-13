import { CASL_TYPES } from '@/types/casl-type';
import { defineAbility } from '@casl/ability';

interface User extends Omit<CASL_TYPES.LoginStore, 'dataInput'> {}

const ability = (user: User) => defineAbility((can, cannot) => {});
