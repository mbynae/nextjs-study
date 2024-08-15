export module CASL_TYPES {
    export type UserData = {
        number: number;
        id: string;
        isLoggedIn: boolean;
        type: 'COMMON' | 'ADMIN' | null;
        name: string;
        email: string;
    };

    export type LoginStore = { dataInput: (data: UserData) => void; logout: () => void } & UserData;
}
