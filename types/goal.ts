export type GoalCategory = 
| "Education"
| "Business"
| "Career"
| "Fitness"
| "Finance"
| "Other";

export interface Goal {
    id: string;
    title: string;
    category: GoalCategory;
    progress: number;
    createdAt: string;    
}
