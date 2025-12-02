// Define the specific Tailwind classes for each design type

import { CardClasses, CardDesign } from "@/interfaces/CreditCardField";





export function getCardDesignClasses(design: CardDesign): CardClasses {
    const cardlight = "/assets/icons/chipcardlight.svg"
    const carddark = "/assets/icons/chipcarddark.svg"
    switch (design.toLowerCase()) {
        // Maps to your Dashboard's light/white theme
        case 'platinum':
            return {
                container: 'bg-blue-100 text-gray-900',
                text: 'text-gray-900',
                label: 'text-gray-500',
                image: carddark

            };
        // Maps to your Dashboard's primary dark/blue theme
        case 'blue':
            return {
                container: 'bg-blue-600 text-white',
                text: 'text-white',
                label: 'text-blue-100/70',
                image: cardlight
            };
        case 'black':
            return {
                container: 'bg-gray-800 text-white',
                text: 'text-white',
                label: 'text-gray-400',
                image: carddark
            };
        // Default fallback (for 'green' or any other color not explicitly styled yet)
        default:
            return {
                container: 'bg-gray-500 text-white',
                text: 'text-white',
                label: 'text-gray-300',
                image: cardlight
            };
    }
}