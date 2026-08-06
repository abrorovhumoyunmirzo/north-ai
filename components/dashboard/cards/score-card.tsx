import { Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ScoreCard() {
    return (
        <Card className="border-neutral-200 shadow-sm">
            <CardContent className="p-6">
                <div className="flex items-center justify-between"> 
                    <p className="text-sm text-neutral-500">
                        AI Score
                    </p>

                    <Sparkles className="h-5 w-5 text-violet-500"/>
                </div>

                <h2 className="mt-3 text-3xl font-bold">
                    84
                </h2>

                <p className="mt-2 text-sm text-neutral-500">
                    Excellent consistency.
                </p>
            </CardContent>
        </Card>
    )
}