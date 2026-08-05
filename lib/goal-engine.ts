import type { GoalCategory } from "@/types/goal";

const CATEGORY_KEYWORDS: Record<Exclude<GoalCategory, "Other">, string[]> = {
  Education: [
    "study",
    "learn",
    "school",
    "university",
    "college",
    "degree",
    "gpa",
    "sat",
    "act",
    "gre",
    "gmat",
    "exam",
    "test",
    "class",
    "course",
    "grade",
    "pass",
    "student",
    "academic",
    "stanford",
    "harvard",
    "mit",
  ],
  Business: [
    "startup",
    "business",
    "company",
    "launch",
    "product",
    "saas",
    "arr",
    "mrr",
    "revenue",
    "founder",
    "customer",
    "users",
    "venture",
    "market",
    "mvp",
    "sales",
    "client",
  ],
  Career: [
    "job",
    "internship",
    "hire",
    "hired",
    "career",
    "promotion",
    "resume",
    "interview",
    "work",
    "salary",
    "portfolio",
    "linkedin",
    "manager",
    "developer",
    "engineer",
  ],
  Fitness: [
    "workout",
    "gym",
    "run",
    "marathon",
    "weight",
    "muscle",
    "fat",
    "diet",
    "fitness",
    "health",
    "exercise",
    "abs",
    "kg",
    "lbs",
    "calories",
    "bench",
    "squat",
  ],
  Finance: [
    "money",
    "invest",
    "savings",
    "stock",
    "crypto",
    "budget",
    "debt",
    "financial",
    "fund",
    "passive income",
    "real estate",
    "wealth",
    "portfolio value",
  ],
};

export function detectGoalCategory(goal: string): GoalCategory {
  if (!goal || typeof goal !== "string") {
    return "Other";
  }

  const normalizedGoal = goal.toLowerCase();

  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    const isMatch = keywords.some((keyword) =>
      normalizedGoal.includes(keyword)
    );
    if (isMatch) {
      return category as GoalCategory;
    }
  }

  return "Other";
}