// Centralized TypeScript interfaces for JSON fixtures in src/app/data

export interface Account {
    id: string;
    accountType: string;
    accountNumber: string;
    balance: number;
    currency: string;
    status?: string;
    openedDate?: string;
    lastTransaction?: string;
    interestRate?: number;
    maturityDate?: string;
    returns?: number;
    nickname?: string;
    routingNumber?: string;
}

export interface Transaction {
    id: string;
    date: string; // ISO date or YYYY-MM-DD
    description: string;
    category?: string;
    type?: string;
    amount: number;
    accountId?: string;
    status?: string;
    merchantLogo?: string;
    location?: string;
    recurring?: boolean;
    fromAccount?: string;
    toAccount?: string;
    orderNumber?: string;
}

export interface Card {
    id: string;
    cardType: string;
    cardNumber: string;
    cardHolder: string;
    expiryDate: string;
    cvv?: string;
    status?: string;
    currentBalance?: number;
    availableCredit?: number;
    creditLimit?: number;
    lastPaymentDate?: string;
    lastPaymentAmount?: number;
    dueDate?: string;
    minimumPayment?: number;
    apr?: number;
    rewards?: Record<string, any>;
    features?: string[];
    design?: string;
    isContactless?: boolean;
    isDigital?: boolean;
}

export type HoldingsItem = {
    symbol: string;
    name: string;
    type: string;
    shares?: number;
    price?: number;
    value?: number;
    gain?: number;
    return?: number;
    allocation?: number;
};

export interface InvestmentAccount {
    id: string;
    type: string;
    provider?: string;
    balance?: number;
    status?: string;
    ytdReturn?: number;
    totalReturn?: number;
    contributions?: Record<string, number>;
    holdings?: HoldingsItem[];
}

export interface Investments {
    portfolioSummary?: Record<string, any>;
    accounts?: InvestmentAccount[];
    watchlist?: Array<Record<string, any>>;
    recentTrades?: Array<Record<string, any>>;
    performanceHistory?: Record<string, number>;
}

export interface Loan {
    id: string;
    type: string;
    status?: string;
    originalAmount?: number;
    currentBalance?: number;
    interestRate?: number;
    term?: number;
    monthsRemaining?: number;
    monthlyPayment?: number;
    nextPaymentDate?: string;
    startDate?: string;
    maturityDate?: string;
    [key: string]: any;
}

export interface BalanceHistory {
    summary?: Record<string, any>;
    accounts?: Record<string, any>;
    trends?: Record<string, any>;
    cashFlow?: Record<string, any>;
    projections?: Record<string, any>;
}

export interface Profile {
    personal?: Record<string, any>;
    address?: Record<string, any>;
    security?: Record<string, any>;
    preferences?: Record<string, any>;
    financialSummary?: Record<string, any>;
    documents?: Record<string, any>;
    beneficiaries?: Array<Record<string, any>>;
    linkedAccounts?: Record<string, any>;
}

export interface ExpenseStats {
    summary?: Record<string, any>;
    categoryBreakdown?: Record<string, any>;
    trends?: Record<string, any>;
    insights?: Array<Record<string, any>>;
    budgetProgress?: Record<string, any>;
}

export interface FinancialGoals {
    active?: Array<Record<string, any>>;
    completed?: Array<Record<string, any>>;
    insights?: Array<Record<string, any>>;
}

export interface Notifications {
    unreadCount?: number;
    alerts?: Array<Record<string, any>>;
    recentlyRead?: Array<Record<string, any>>;
    preferences?: Record<string, any>;
}

export interface P2PTransfers {
    recentContacts?: Array<Record<string, any>>;
    transferHistory?: Array<Record<string, any>>;
    limits?: Record<string, any>;
    preferences?: Record<string, any>;
}

export interface PaymentSettings {
    templates?: Array<Record<string, any>>;
    scheduledPayments?: Array<Record<string, any>>;
    autopay?: Record<string, any>;
}

export interface Rewards {
    summary?: Record<string, any>;
    earningRate?: Record<string, any>;
    redemptionHistory?: Array<Record<string, any>>;
    redeemOptions?: Record<string, any>;
    pointsActivity?: Array<Record<string, any>>;
}

export interface CardsData {
    cards?: Card[];
}

export interface AccountsData {
    accounts?: Account[];
}

export interface TransactionsData {
    transactions?: Transaction[];
}
