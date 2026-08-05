import { AIMentorResponse } from "./types";

export async function generateMentorMessage(
    goal: string
): Promise<AIMentorResponse> {
    return {
        message: `Stay focused on "${goal}". Complete today's tasks before  moving to tomorrow.`
    };
}