export module TODOLIST_TYPES {
    export type UsetData = {
        id: number;
        name: string;
        username: string;
        email: string;
        address: {
            street: string;
            suite: string;
            city: string;
            zipcode: string;
        };
        phone: string;
        website: string;
        company: {
            name: string;
            catchPhrase: string;
            bs: string;
        };
    };

    export type PostData = {
        id: number;
        title: string;
        body: string;
        userId: number;
    };
}
