const calculateExpensesIncomes = (transactions: Transaction[]): {
    currentMonthExpense: number;
    currentBalance: number;
    currentMonthIncome: number;
    currentMonthIdentifier: string;
} => {
    let expense = 0;
    let income = 0;
    const validDates = transactions
        .map((t) => new Date(t.date))
        .filter((d) => !isNaN(d.getTime()));

    if (validDates.length === 0) {
        return { currentMonthExpense: 0, currentBalance: 0, currentMonthIncome: 0, currentMonthIdentifier: "Unknown Month" };
    }

    const latestDate = new Date(Math.max(...validDates.map((d) => d.getTime())));
    const currentMonthIdentifier = `${latestDate.getFullYear()}-${String(
        latestDate.getMonth() + 1
    ).padStart(2, "0")}`;
    const monthlyTransactions = transactions.filter((t) =>
        t.date.startsWith(currentMonthIdentifier)
    );

    monthlyTransactions.forEach((transaction) => {
        if (transaction.type === "debit" || transaction.type === "automatic-debit" || transaction.type === "payment" && transaction.category !== "Transfer" && transaction.category !== "Deposit" && transaction.category !== "Refund" && transaction.category !== "Income" && transaction.category !== "Salary" && transaction.category !== "Investment") {
            expense += transaction.amount;
        } else if (transaction.type === "credit" || transaction.type === "transfer" || transaction.category === "Income" || transaction.category === "Salary" || transaction.category === "Investment" || transaction.category === "Deposit" || transaction.category === "Refund") {
            income += transaction.amount;
        }
    });

    const baseBalance = 15000;
    const currentBalance = baseBalance + (income - expense);
    return { currentMonthExpense: expense, currentBalance, currentMonthIncome: income, currentMonthIdentifier };
} 