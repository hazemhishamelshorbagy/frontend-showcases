// src/features/auth/types.ts
export interface User {
    id: string;
    name: string;
    email: string;
    password: string
    avatar?: string;
    createdAt: string;
}
