// app/fonts.ts

import localFont from 'next/font/local';

export const interLocal = localFont({
    src: [
        // --- Extra Light (200) ---
        {
            path: '../../public/fonts/Inter_18pt-ExtraLight.ttf',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Inter_18pt-ExtraLightItalic.ttf',
            weight: '200',
            style: 'italic',
        },
        // --- Light (300) ---
        {
            path: '../../public/fonts/Inter_18pt-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        // --- Regular (400) ---
        // Assuming a regular weight for the italic file. Add your Inter_18pt-Regular.ttf file (weight: '400', style: 'normal') if you have it.
        {
            path: '../../public/fonts/Inter_18pt-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        // --- Bold (700) ---
        {
            path: '../../public/fonts/Inter_18pt-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Inter_18pt-BoldItalic.ttf',
            weight: '700',
            style: 'italic',
        },
        // --- Extra Bold (800) ---
        {
            path: '../../public/fonts/Inter_18pt-ExtraBold.ttf',
            weight: '800',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Inter_18pt-ExtraBoldItalic.ttf',
            weight: '800',
            style: 'italic',
        },
        // --- Black (900) ---
        {
            path: '../../public/fonts/Inter_18pt-Black.ttf',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Inter_18pt-BlackItalic.ttf',
            weight: '900',
            style: 'italic',
        },
    ],
    // This defines a CSS variable, making it easy to use with Tailwind or global CSS.
    variable: '--font-inter-local',
    display: 'swap',
});