"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    Target,
    Map,
    Sparkles,
    Settings,
} from "lucide-react"
import { title } from "process"

const items = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Goals",
        href: "/goals",
        icon: Target,
    },
    {
        title: "Roadmap",
        href: "/roadmap",
        icon: Map,
    },
    {
        title: "AI Mentor",
        href: "/mentor",
        icon: Sparkles,
    },
    {
        title: "Settings",
        href: "/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden lg:flex w-64 border-r border-neutral-200 bg-white flex-col">
            <div className="px-6 py-8">
                <h1 className="text-xl font-bold">North AI</h1>
            </div>

            <nav className="flex flex-col gap-2 px-4">
                {items.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link key={item.title} href={item.href} className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${pathname === item.href ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-neutral-100"}`} >
                        <Icon size={18} />
                        {item.title}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}