const getCategoryIcon = (category: string) => {
    switch (category) {
        case 'Groceries': return 'ShoppingBag';
        case 'Entertainment': return 'Tv';
        case 'Income': return 'DollarSign';
        case 'Transportation': return 'Car';
        case 'Dining': return 'Coffee';
        case 'Investment': return 'TrendingUp';
        case 'Shopping': return 'CreditCard';
        case 'Auto & Transport': return 'GasCan';
        case 'Housing': return 'Home';
        case 'Health & Fitness': return 'HeartPulse';
        case 'Bills & Utilities': return 'Receipt';
        case 'Credit Card': return 'Wallet';
        default: return 'Circle';
    }
};

export default getCategoryIcon;