import { useEffect, useState } from "react";

/**
 * useIsMobile
 * Returns true when window.innerWidth is less than the provided breakpoint.
 * Default breakpoint is 768 (md in Tailwind).
 * This hook only updates on the client and is safe for use in client components.
 */
export default function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        let raf = 0;

        const check = () => {
            // use requestAnimationFrame to avoid layout thrash on rapid resizes
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                setIsMobile(window.innerWidth < breakpoint);
            });
        };

        check();
        window.addEventListener("resize", check);

        return () => {
            window.removeEventListener("resize", check);
            cancelAnimationFrame(raf);
        };
    }, [breakpoint]);

    return isMobile;
}
