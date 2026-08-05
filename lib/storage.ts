import type { Goal } from "@/types/goal"
import type { Roadmap } from "./roadmap-generator";

const ROADMAP_KEY = "north-roadmap";
const GOAL_KEY = "north-goal";

export function saveGoal(goal: Goal) {
    localStorage.setItem(GOAL_KEY, JSON.stringify(goal));
}

export function getGoal(): Goal | null {
    const data = localStorage.getItem(GOAL_KEY);

    if (!data) return null;

    return JSON.parse(data) as Goal;
}

export function saveRoadmap(roadmap: Roadmap) {
    localStorage.setItem(ROADMAP_KEY, JSON.stringify(roadmap));
}

export function getRoadmap(): Roadmap | null {
    const data = localStorage.getItem(ROADMAP_KEY);

    if (!data) return null;

    return JSON.parse(data) as Roadmap;
}