import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

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
            _hasHydrated: false,
            dataInput: (data) => set(data),
            logout: () => set({ ...caslLoginInit }),
            allGetState: () => {
                const { dataInput, logout, allGetState, _hasHydrated, setHasHydrated, ...pureState } = get();
                return pureState;
            },
            setHasHydrated: (state) => set({ _hasHydrated: state }),
        }),
        {
            name: 'userData',
            partialize: (state) => {
                const { _hasHydrated, ...pureState } = state;
                return pureState;
            },
            storage: createJSONStorage(() => sessionStorage),
            onRehydrateStorage: (state) => {
                return () => state.setHasHydrated(true);
            },
        },
    ),
);
