export interface RoadmapTask {
    id: string;
    title: string;
    completed: boolean;
}

export interface Milestone {
    id: string;
    title: string;
    tasks: RoadmapTask[];
}

export interface Roadmap {
    goalId: string;
    milestones: Milestone[];
}