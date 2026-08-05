import type { Roadmap } from "@/types/roadmap";
import { Milestone } from "lucide-react";

export function countTotalTasks(roadmap: Roadmap): number {
    return roadmap.milestones.reduce(
        (total, milestone) => total + milestone.tasks.length,
        0
    );
}

export function countCompletedTasks(roadmap: Roadmap): number {
    return roadmap.milestones.reduce(
        (total, milestone) =>
            total + milestone.tasks.filter((task) => task.completed).length,
        0
    );
}

export function calculateProgress(roadmap: Roadmap): number {
    const total = countTotalTasks(roadmap);

    if (total === 0 ) return 0;

    const completed = countCompletedTasks(roadmap);

    return Math.round((completed / total) * 100);
}

export function toggleTask(
    roadmap: Roadmap,
    taskId: string
): Roadmap {
    return {
        ...roadmap,
        milestones: roadmap.milestones.map((milestone) => ({
            ...milestone,
            tasks: milestone.tasks.map((task) =>
            task.id === taskId
        ? {
            ...task,
            completed: !task.completed,
        }
        : task
            ),
        })),
    };
}