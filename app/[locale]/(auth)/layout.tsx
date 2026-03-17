export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative z-50 bg-[#050505] min-h-screen">
            {children}
        </div>
    );
}
