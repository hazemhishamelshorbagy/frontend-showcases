interface ExpenseData {
    name: string; // Month name (e.g., 'Jan')
    expense: number; // Total expense for the month
    income: number;  // Total income for the month
}

export interface Transaction {
    id: string;
    date: string;
    description: string;
    category: string;
    type: 'debit' | 'credit' | 'automatic-debit' | 'transfer' | 'payment';
    amount: number;
    accountId: string;
    status: 'completed' | 'pending' | 'failed';
    merchantLogo?: string;
    location?: string;
    recurring?: boolean;
    orderNumber?: string;
    fromAccount?: string;
    toAccount?: string;
}

interface CurrencyDisplayProps {
    amount: number;
    isIncome?: boolean;
    className?: string;
}

interface ChartProps {
    // Note: We use 'any' for simplicity as full ApexCharts types are extensive.
    options: any;
    series: any;
    typeChart: any;
    height: string;
}
interface ExpenseChartProps {
    data?: ExpenseData[];
}

export interface TransactionsTableProps {
    data: Transaction[];
};

export interface TransactionState {
    stateColor: string;
    text: string;

}



export type validStatuses = "pending" | "completed" | "failed";

export interface Transactionsign {
    textColor: string;
    sign: string;
}

export type validTransactionTypes = 'debit' | 'credit' | 'automatic-debit' | 'transfer' | 'payment';