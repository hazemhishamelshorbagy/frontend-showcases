// src/features/auth/api/authMock.ts
import { mockUsers } from "../mockData";
import { User } from "../types";

let users = [...mockUsers];
let currentUser: User | null = null;

// login
export const login = (email: string, password: string): User | null => {
    const found = users.find(u => u.email === email && u.password === password);
    if (found) currentUser = found;
    return found ?? null;
}
// register
export const register = (newUser: Omit<User, "id" | "createdAt">): User => {
    const exists = users.some(u => u.email === newUser.email);
    if (exists) throw new Error("User already exists");

    const createdUser: User = {
        ...newUser,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
    };

    users.push(createdUser);
    currentUser = createdUser;
    return createdUser;
};

export const logout = (): boolean => {
    currentUser = null;
    return true;
};

export const getCurrentUser = (): User | null => currentUser;

// ✅ Find user
export const findUserByEmail = (email: string): User | undefined => users.find(u => u.email === email);

// ✅ Get user by ID
export const getUser = (id: string): User | undefined =>
    users.find(u => u.id === id);