import Sidebar from "@/components/dashboard/sidebar"
import DashboardHeader from "./header";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-neutral-50">
            <Sidebar />

            <div className="flex flex-1 flex-col">
                <DashboardHeader />

                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    )
}