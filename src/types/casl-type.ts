import { HasHydrated } from './common-type';

export module CASL_TYPES {
    export type UserData = {
        number: number;
        id: string;
        isLoggedIn: boolean;
        type: 'COMMON' | 'ADMIN' | null;
        name: string;
        email: string;
    };

    export type UserDataInput = {
        allGetState: () => UserData;
        dataInput: (data: UserData) => void;
        logout: () => void;
    };

    export type LoginStore = UserData & UserDataInput & HasHydrated;
}
