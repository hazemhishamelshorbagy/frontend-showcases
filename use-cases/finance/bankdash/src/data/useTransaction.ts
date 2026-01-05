
import { useMemo } from "react";
import dataTransaction from "../data/transactions.json";


export function useTransaction() {
    return dataTransaction.transactions;
}
export function useTransactionById(id: string) {
    return dataTransaction.transactions.find(transaction => transaction.id === id);
}
export function useTransactionsByType(type: string) {
    return dataTransaction.transactions.filter(transaction => transaction.type === type);
}
export function useTransactionsByDateRange(startDate: string, endDate: string) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return dataTransaction.transactions.filter(transaction => {
        const transactionDate = new Date(transaction.date);
        return transactionDate >= start && transactionDate <= end;
    });
}

export function useTotalAmountByType(type: string) {
    return dataTransaction.transactions
        .filter(transaction => transaction.type === type)
        .reduce((total, transaction) => total + transaction.amount, 0);
}
export function useAverageTransactionAmount() {
    const totalAmount = dataTransaction.transactions.reduce((total, transaction) => total + transaction.amount, 0);
    return totalAmount / dataTransaction.transactions.length;
}
export function useTransactionCountByType(type: string) {
    return dataTransaction.transactions.filter(transaction => transaction.type === type).length;
}
export function useRecentTransactions(count: number) {
    return dataTransaction.transactions
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, count);
}
export function useTransactionsByCategory(category: string) {
    return dataTransaction.transactions.filter(transaction => transaction.category === category);
}
export function useTotalAmountByCategory(category: string) {
    return dataTransaction.transactions
        .filter(transaction => transaction.category === category)
        .reduce((total, transaction) => total + transaction.amount, 0);
}

export function useTransactionCategories() {
    const categories = dataTransaction.transactions.map(transaction => transaction.category);
    return Array.from(new Set(categories));
}

export function useTransactionsSummary() {
    const totalIncome = useTotalAmountByType("income");
    const totalExpenses = useTotalAmountByType("expenses");
    const netBalance = totalIncome - totalExpenses;
    return {
        totalIncome,
        totalExpenses,
        netBalance,
    };
}


// Hook to filter transactions by tab name: 'all', 'expenses', or 'income'
export function useTransactionsByTab(tab: string) {
    const transactions = useTransaction(); // ✅ always called

    const filtered = useMemo(() => {
        if (!transactions || transactions.length === 0) return [];

        if (tab === "income") {
            return transactions.filter((t) => t.type === "credit");
        }

        if (tab === "debit" || tab === "expenses") {
            return transactions.filter((t) => t.type === "debit");
        }

        return transactions;
    }, [transactions, tab]);

    return filtered;
}
