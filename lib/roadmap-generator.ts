import { GoalCategory } from "@/types/goal";

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

const TEMPLATES: Record<GoalCategory, Array<{ title: string; tasks: string[] }>> = {
  Education: [
    {
      title: "Learn Fundamentals",
      tasks: [
        "Gather core learning materials and syllabus",
        "Set up daily study schedule",
        "Complete foundational concepts overview",
      ],
    },
    {
      title: "Practice",
      tasks: [
        "Solve practice problems daily",
        "Take weekly assessment quizzes",
        "Review weak areas and revise notes",
      ],
    },
    {
      title: "Apply",
      tasks: [
        "Complete a capstone test or project",
        "Simulate final exam conditions",
        "Review final results and document key learnings",
      ],
    },
  ],
  Business: [
    {
      title: "Validate Idea",
      tasks: [
        "Conduct user interviews and market research",
        "Define target customer persona",
        "Draft value proposition and business hypothesis",
      ],
    },
    {
      title: "Build MVP",
      tasks: [
        "Define core feature set",
        "Develop initial prototype",
        "Test MVP with beta users",
      ],
    },
    {
      title: "Launch",
      tasks: [
        "Set up landing page and analytics",
        "Execute initial marketing campaign",
        "Onboard first paying customers",
      ],
    },
  ],
  Career: [
    {
      title: "Skills",
      tasks: [
        "Identify key skill gaps for target role",
        "Complete relevant course or certification",
        "Build a hands-on technical project",
      ],
    },
    {
      title: "Portfolio",
      tasks: [
        "Update resume with recent achievements",
        "Optimize LinkedIn profile",
        "Publish portfolio showcasing best work",
      ],
    },
    {
      title: "Interview",
      tasks: [
        "Apply to target companies weekly",
        "Practice mock behavioral and technical interviews",
        "Follow up on submitted applications",
      ],
    },
  ],
  Fitness: [
    {
      title: "Nutrition",
      tasks: [
        "Calculate daily calorie and macro targets",
        "Set up weekly meal prep plan",
        "Track daily food intake",
      ],
    },
    {
      title: "Training",
      tasks: [
        "Establish workout schedule",
        "Execute structured exercise routine",
        "Progressively overload workout weights/intensity",
      ],
    },
    {
      title: "Consistency",
      tasks: [
        "Track weekly body measurements and weight",
        "Maintain 8+ hours of sleep nightly",
        "Review progress photos every month",
      ],
    },
  ],
  Finance: [
    {
      title: "Budget",
      tasks: [
        "Track income and fixed expenses",
        "Build an emergency fund",
        "Eliminate high-interest debt",
      ],
    },
    {
      title: "Invest",
      tasks: [
        "Set up automated monthly investment transfer",
        "Allocate portfolio into low-cost index funds",
        "Review tax-advantaged account options",
      ],
    },
    {
      title: "Scale",
      tasks: [
        "Explore additional revenue/income sources",
        "Optimize monthly savings rate",
        "Rebalance investment portfolio annually",
      ],
    },
  ],
  Other: [
    {
      title: "Getting Started",
      tasks: [
        "Define scope and success criteria",
        "Gather required resources",
        "Establish weekly milestone schedule",
      ],
    },
    {
      title: "Progress",
      tasks: [
        "Execute core action items",
        "Track weekly progress metric",
        "Adjust plan based on early feedback",
      ],
    },
    {
      title: "Finish",
      tasks: [
        "Complete final deliverables",
        "Conduct retrospective analysis",
        "Celebrate objective achievement",
      ],
    },
  ],
};

export function generateRoadmap(goalId: string, category: GoalCategory): Roadmap {
  const selectedTemplate = TEMPLATES[category] ?? TEMPLATES.Other;

  const milestones: Milestone[] = selectedTemplate.map((milestoneTemplate) => ({
    id: crypto.randomUUID(),
    title: milestoneTemplate.title,
    tasks: milestoneTemplate.tasks.map((taskTitle) => ({
      id: crypto.randomUUID(),
      title: taskTitle,
      completed: false,
    })),
  }));

  return {
    goalId,
    milestones,
  };
}