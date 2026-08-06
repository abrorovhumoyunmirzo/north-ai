"use cleint" 

import { Bell } from "lucide-react"

export default function DashboardHeader() {
    return (
        <header className="flex h-16 items-centered justify-between border-b border-neutral-200 bg-white px-6">
            <div>
                <h1 className="text-xl font-bold text-neutral-900">
                    Dashboard
                </h1>
                <p className="text-sm text-neutral-500">
                    Welcome back.
                </p>
            </div>

            <div className="flex item-center gap-4">
                <button className="rounded-xl border border-neutral-200 p-2 hover:bg-neutral-100">
                    <Bell className="h-5 w-5 text-neutral-600" />
                </button>

                <div className="flex item-center gap-3 rounded-xl border border-neutral-200 px-3 py-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white">
                        H
                    </div>

                    <div className="hidden sm:block">
                        <p className="text-sm font-semibold text-neutral-900">
                            Humoyunmirzo
                        </p>
                        <p className="text-xs text-neutral-500">
                            Founder
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}