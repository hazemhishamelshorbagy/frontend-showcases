import cardData from './cards.json';

export function useCardList() {
    // You could add filtering, sorting, or memoization here if needed
    return cardData;
}
