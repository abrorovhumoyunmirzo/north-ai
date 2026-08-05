"use client";

import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Roadmap } from "@/lib/roadmap-generator";
import { saveRoadmap } from "@/lib/storage";
import { toggleTask } from "@/lib/progress"

interface RoadmapSectionProps {
  roadmap: Roadmap | null;
  setRoadmap: (roadmap: Roadmap) => void;
}

export function RoadmapSection({ roadmap, setRoadmap }: RoadmapSectionProps) {
  if (!roadmap) return null;

  const handleTaskToggle = (taskId: string) => {
    const updated = toggleTask(roadmap, taskId);
    setRoadmap(updated);
    saveRoadmap(updated);
  };

  return (
    <div className="space-y-6 md:col-span-2 lg:col-span-3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold tracking-tight text-neutral-900">
          Roadmap
        </h2>
        <span className="text-xs font-medium text-neutral-400">
          {roadmap.milestones.length} Milestones
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {roadmap.milestones.map((milestone) => (
          <Card key={milestone.id} className="border-neutral-200/80 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-bold text-neutral-900">
                {milestone.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2.5">
                {milestone.tasks.map((task) => (
                  <li
                    key={task.id}
                    onClick={() => handleTaskToggle(task.id)}
                    className="flex cursor-pointer items-start gap-2.5 text-sm text-neutral-700 transition-opacity hover:opacity-80"
                  >
                    <CheckCircle2
                      className={`mt-0.5 h-4 w-4 shrink-0 transition-colors ${
                        task.completed
                          ? "text-emerald-500"
                          : "text-neutral-300"
                      }`}
                    />
                    <span
                      className={
                        task.completed
                          ? "line-through text-neutral-400"
                          : "text-neutral-700"
                      }
                    >
                      {task.title}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}