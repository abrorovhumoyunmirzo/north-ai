import { TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProgressCardProps {
    progress: number;
}

export default function ProgressCard({ progress } : ProgressCardProps) {
    return (
        <Card className="border-neutral-200 shadow-sm">
            <CardContent className="p-6">
                <div className="flex item-center justify-between">
                    <p className="text-sm text-neutral-500">Progress</p>
                    <TrendingUp className="h-5 w-5 text-neutral-400"/>
                </div>

                <h2 className="mt-3 text-3xl font-bold">
                    {progress}%
                </h2>

                <div className="mt-4 h-2 rounded-full bg-neutral-100">
                    <div className="h-full rounded-full bg-neutral-900" style={{ width: `${progress}%` }}/>
                </div>
            </CardContent>
        </Card>
    )
}