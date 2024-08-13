import { create } from 'zustand';
import type { CASL_TYPES } from '@/types/casl-type';

const userData = localStorage.getItem('userData');

export const caslLoginInit = {
    number: 0,
    id: '',
    isLoggedIn: false,
    type: null,
    name: '',
    email: '',
};

export const useCaslLoginData = create<CASL_TYPES.LoginStore>((set) => ({
    ...(userData ? JSON.parse(userData) : caslLoginInit),
    dataInput: (data) => set(data),
}));
