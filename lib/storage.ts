import type { Goal } from "@/types/goal"

const GOAL_KEY = "north-goal";

export function saveGoal(goal: Goal) {
    localStorage.setItem(GOAL_KEY, JSON.stringify(goal));
}

export function getGoal(): Goal | null {
    const data = localStorage.getItem(GOAL_KEY);

    if (!data) return null;

    return JSON.parse(data) as Goal;
}