"use client";

import { usePathname } from "next/navigation";

export default function HideOnPortal({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Wymienione ścieżki (i ich podstrony), gdzie ten komponent NIE MOŻE BYĆ WYRENDEROWANY
    const isHiddenModule = pathname.startsWith("/admin") || pathname.startsWith("/dashboard") || pathname.startsWith("/login");

    if (isHiddenModule) {
        return null;
    }

    return <>{children}</>;
}
