import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { CASL_TYPES } from '@/types/casl-type';

export const caslLoginInit = {
    number: 0,
    id: '',
    isLoggedIn: false,
    type: null,
    name: '',
    email: '',
};

export const useCaslLoginData = create<CASL_TYPES.LoginStore>()(
    persist(
        (set, get) => ({
            ...caslLoginInit,
            dataInput: (data) => set(data),
            logout: () => set({ ...caslLoginInit }),
        }),
        {
            name: 'userData',
        },
    ),
);
