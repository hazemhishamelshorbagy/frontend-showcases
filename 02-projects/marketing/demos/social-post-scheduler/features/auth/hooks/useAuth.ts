import { useState, useEffect } from "react";
import { User } from "../types";
import { login, logout, register } from "../api/authMock";

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // Load user from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
        setLoading(false);
    }, []);

    // --- Actions ---
    const handleLogin = (email: string, password: string) => {
        setLoading(true);
        try {
            const loggedIn = login(email, password);
            setUser(loggedIn);
            localStorage.setItem("user", JSON.stringify(loggedIn));
            return loggedIn;
        } finally {
            setLoading(false);
        }
    };

    const handleRegister = (newUser: Omit<User, "id" | "createdAt">) => {
        setLoading(true);
        try {
            const created = register(newUser);
            setUser(created);
            localStorage.setItem("user", JSON.stringify(created));
            return created;
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        logout();
        setUser(null);
        localStorage.removeItem("user");
    };

    return { user, loading, handleLogin, handleRegister, handleLogout };
}
