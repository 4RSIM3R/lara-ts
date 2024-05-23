export type DateTime = string;

export type Nullable<T> = T | null;

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export type PaginateProps<T> = {
    data?: T[];
    links: {
        first: string | null;
        last: string | null;
        prev: string | null;
        next: string | null;
    };
    meta: {
        current_page: number;
        from: number;
        last_page: number;
        to: number;
        total: number;
    };
};
