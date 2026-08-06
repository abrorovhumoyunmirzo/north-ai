import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TasksCard() {
    return (
        <Card className="border-neutral-200 shadow-sm">
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-500">
                        Completed Tasks
                    </p>
                    <CheckCircle2 className="h-5 w-5 text-green-500"/>
                </div>

                <h2 className=" mt-3 text-3xl font-bold">
                    9 / 15
                </h2>
                
                <p className="mt-2 text-sm text-neutral-500">
                    Finish today's roadmap
                </p>
            </CardContent>
        </Card>
    )
}