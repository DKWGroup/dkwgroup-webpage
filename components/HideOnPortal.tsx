"use client";

import { usePathname } from "next/navigation";

export default function HideOnPortal({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Wymienione ścieżki (i ich podstrony), gdzie ten komponent NIE MOŻE BYĆ WYRENDEROWANY
    // Uwzględniamy lokalizację (np. /pl/admin, /en/admin)
    const isHiddenModule = pathname.match(/^\/(?:pl|en)?\/?(?:admin|dashboard|login)(\/.*)?$/);

    if (isHiddenModule) {
        return null;
    }

    return <>{children}</>;
}
