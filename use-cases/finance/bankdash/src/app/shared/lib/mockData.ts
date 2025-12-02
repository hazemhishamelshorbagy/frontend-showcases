// Centralized mock data exports that import JSON fixtures and attach types.

import accountsJson from '../data/accounts.json';
import transactionsJson from '../data/transactions.json';
import profileJson from '../data/profile.json';
import balanceHistoryJson from '../data/balance-history.json';
import {
    Account,
    Transaction,
    Profile,
    BalanceHistory,
    AccountsData,
    TransactionsData,
} from './types';

// --- Data exports (cast from JSON fixtures) ---
const rawAccounts = accountsJson as unknown as AccountsData;
const rawTransactions = transactionsJson as unknown as TransactionsData;

export const accounts: Account[] = rawAccounts.accounts ?? [];
export const transactions: Transaction[] = rawTransactions.transactions ?? [];
export const profile: Profile = (profileJson as any).profile;
export const balanceHistory: BalanceHistory = (balanceHistoryJson as any).balanceHistory;

export default {
    accounts,
    transactions,
    profile,
    balanceHistory,
};

