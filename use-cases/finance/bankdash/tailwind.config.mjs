import { join } from "path";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        join(__dirname, "src/**/*.{js,ts,jsx,tsx}"),
        join(__dirname, "src/**/**/*.{js,ts,jsx,tsx}"),
        join(__dirname, "src/**/**/**/*.{js,ts,jsx,tsx}"),
        join(__dirname, "public/index.html"),
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: "var(--primary)",
                "primary-foreground": "var(--primary-foreground)",
                secondary: "var(--secondary)",
                "secondary-foreground": "var(--secondary-foreground)",
                muted: "var(--muted)",
                "muted-foreground": "var(--muted-foreground)",
                accent: "var(--accent)",
                "accent-foreground": "var(--accent-foreground)",
                destructive: "var(--destructive)",
                "destructive-foreground": "var(--destructive-foreground)",
                border: "var(--border)",
                ring: "var(--ring)",
                input: "var(--input)",
                // Raw palette
                "raw-warm-orange": "var(--color-warm-orange)",
                "raw-dark-blue": "var(--color-dark-blue)",
                "raw-vibrant-blue": "var(--color-vibrant-blue)",
                "raw-pink": "var(--color-pink)",
                "raw-muted-blue": "var(--color-muted-blue)",
                "raw-red": "var(--color-red)",
                "raw-light-text": "var(--color-light-text)",
                "raw-main-text": "var(--color-main-text)",
                "raw-muted-bg": "var(--color-muted-bg)",
                "raw-border-default": "var(--color-border-default)",
                // Chart colors
                "chart-1": "var(--chart-1)",
                "chart-2": "var(--chart-2)",
                "chart-3": "var(--chart-3)",
                "chart-4": "var(--chart-4)",
                "chart-5": "var(--chart-5)",
                // Sidebar
                sidebar: "var(--sidebar)",
                "sidebar-foreground": "var(--sidebar-foreground)",
                "sidebar-primary": "var(--sidebar-primary)",
                "sidebar-primary-foreground": "var(--sidebar-primary-foreground)",
                "sidebar-accent": "var(--sidebar-accent)",
                "sidebar-accent-foreground": "var(--sidebar-accent-foreground)",
                "sidebar-border": "var(--sidebar-border)",
                "sidebar-ring": "var(--sidebar-ring)",
            },
            borderRadius: {
                sm: "var(--radius-sm)",
                md: "var(--radius-md)",
                lg: "var(--radius-lg)",
                xl: "var(--radius-xl)",
            },
            boxShadow: {
                card: "var(--shadow-card)",
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
