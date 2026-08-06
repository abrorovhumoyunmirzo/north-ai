import { Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function StreakCard() {
    return (
        <Card className="border-neutral-200 shadow-sm">
            <CardContent className="p-6"> 
                <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-500">
                        Current Streak
                    </p>

                    <Flame className="h-5 w-5 text-orange-500"/>
                </div>

                <h2 className="mt-3 text-3xl font-bold">
                    7 Days
                </h2>
                
                <p className="mt-2 text-sm text-neutral-500">
                    Keep going every day
                </p>
            </CardContent>
        </Card>
    )
}