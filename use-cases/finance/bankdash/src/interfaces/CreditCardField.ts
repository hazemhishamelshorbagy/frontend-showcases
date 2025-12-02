
export interface CreditCardFieldProps {
    label: string;
    description: string | number;
    haveLabel?: boolean;
    className?: string;

}

export interface CreditCardProps {
    cardHolder: string;
    cardNumber: string;
    currentBalance: number; // Use number type for formatting
    expiryDate: string;
    design: CardDesign; // Accepts the specific design name from the JSON
}
export interface CardClasses {
    container: string;
    text: string;
    label: string;
    image: string
}

export type CardDesign = "platinum" | "blue" | "black" | "green" | string;
export interface CreditCardsFeatureProps {
    cards: CreditCardProps[];
    noOfCard: number;
}