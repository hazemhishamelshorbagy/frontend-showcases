import { Transactionsign, validTransactionTypes } from "@/interfaces/Transaction";

export function checkTransactionTypeSign(type: validTransactionTypes): Transactionsign {
    switch (type) {
        case 'credit':
            return {
                textColor: 'success',
                sign: '+'
            };

        case 'debit':
            return {
                textColor: 'raw-red',
                sign: '-'
            };
        case 'automatic-debit':
            return {
                textColor: 'raw-red',
                sign: '-'
            };
        case 'transfer':
            return {
                textColor: 'blue-500',
                sign: '⇄'
            };
        case 'payment':
            return {
                textColor: 'raw-red',
                sign: '-'
            }
    }
}