export interface CardProps {
    card_id: string;
    card_number: string;
    card_name: string
    expiry_date: string;
    cvv?: string;
    status?: string;
    currency?: string;
    onClick?: () => void;
    themesCardType: string | "Debit" | "Credit";
    daily_spending_limit?: number;
    credit_limit?: number,
    used_limit?: number,
    available_limit?: number,
    current_balance?: number

}
export interface CardBalanceProps {
    info?: number | string;
    infoDesc?: string;
    currency?: string;
    cardLabel?: string;
    cardText?: string;

}
export interface CardThemeProps {
    classTheme: string;
    cardLabel: string;
    cardText: string;
    chipImage: string;
    cardTextNumber?: string;
    logoCard: string
}