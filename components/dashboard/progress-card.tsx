import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProgressCardProps {
  progress: number;
}

export function ProgressCard({ progress }: ProgressCardProps) {
  // Clamp progress value between 0 and 100
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <Card className="border-neutral-200/80 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-semibold text-neutral-600">
          Overall Progress
        </CardTitle>
        <TrendingUp className="h-4 w-4 text-neutral-400" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-neutral-900">
          {clampedProgress}%
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-100">
          <div
            className="h-full rounded-full bg-neutral-900 transition-all duration-500"
            style={{ width: `${clampedProgress}%` }}
          />
        </div>
        <p className="mt-3 text-xs text-neutral-500">
          Your journey starts today. Complete your first focus task.
        </p>
      </CardContent>
    </Card>
  );
}