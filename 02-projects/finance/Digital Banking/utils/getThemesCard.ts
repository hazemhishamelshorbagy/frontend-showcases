import { CardThemeProps } from "@/features/cards/types/cards";
import { chipdark, chipwhite, logoCarddark, logoCardlight } from "@/public/icons";

export const getThemesCard = (type: 'Credit' | 'Debit' | string): CardThemeProps => {
    const cardBase = "w-[350px] h-[225px] rounded-[25px] font-semibold flex flex-col justify-between border-0 transition-all duration-300";
    switch (type) {
        case 'Debit':
            return {
                classTheme: `${cardBase} debit-card-theme`,
                cardLabel: "text-white",
                cardText: "text-white",
                cardTextNumber: "  text-white text-2xl",
                chipImage: chipwhite,
                logoCard: logoCardlight

            }

        case 'Credit':
            return {
                classTheme: `${cardBase} credit-card-theme`,
                cardLabel: "text-bankdash-text-secondary",
                cardText: " text-bankdash-text ",
                cardTextNumber: "font-bold  text-bankdash-text text-2xl",
                chipImage: chipdark,
                logoCard: logoCarddark


            }


        default:
            return {
                classTheme: "",
                cardLabel: "",
                cardText: "",
                chipImage: '',
                logoCard: logoCarddark

            }

    }
}