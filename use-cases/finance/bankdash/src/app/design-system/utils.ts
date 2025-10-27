import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Utility function for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Convert tokens to CSS variables
export function tokensToCssVariables(tokens: Record<string, string>) {
    return Object.entries(tokens).reduce((acc, [key, value]) => {
        acc[`--${key}`] = value
        return acc
    }, {} as Record<string, string>)
}