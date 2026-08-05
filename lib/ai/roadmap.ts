import { AIRoadmapResponse } from "./types";

export async function generateAIRoamap(
    goal: string
): Promise<AIRoadmapResponse> {
    return {
        milestone: [
            {
                title: "Preparation",
                tasks: [
                   { title: "Research the goal" },
                   { title: "Create daily schedule" },
                   { title: "Collect resources" },
                ],
            },
            {
                title: "Execution",
                tasks: [
                    { title: "Practice every day" },
                    { title: "Track weekly progress" },
                    { title: "Improve weak points" },
                ],
            },
            {
                title: "Mastery",
                tasks: [
                    { title: "Build final project" },
                    { title: "Review results" },
                    { title: "Plan next milestone" },
                ],
            },
        ],
    };
}