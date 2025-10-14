// src/features/auth/api/authMock.ts
import { mockUsers } from "../mockData";
import { User } from "../types";

let users = [...mockUsers];

export const findUserByEmail = (email: string): User | undefined => users.find(u => u.email === email);
export const getUser = (id: string): User | undefined => users.find(u => u.id === id);
