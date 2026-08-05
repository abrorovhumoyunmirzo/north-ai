export interface AIRoadmapTask {
    title: string;
}

export interface AIRoadmapMilestone {
    title: string;
    tasks : AIRoadmapTask[];
}

export interface AIRoadmapResponse {
    milestone: AIRoadmapMilestone[];
}

export interface AIMentorResponse {
    message: string;
}