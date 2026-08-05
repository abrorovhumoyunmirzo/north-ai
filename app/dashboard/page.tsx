"use client";

import { useEffect, useState } from "react";
import { Sparkles, CheckCircle2, Target, TrendingUp, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [goal, setGoal] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const savedGoal = localStorage.getItem("north-goal");
    setGoal(savedGoal);
    setIsLoading(false);
  }, []);

  const tasks = [
    "Complete initial setup & preference tuning",
    "Review your baseline roadmap milestone",
    "Log your first daily win with your AI Mentor",
  ];

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-10">
      <div className="mx-auto max-w-6xl space-y-8">
        
        {/* Welcome Header */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Good afternoon,
          </h1>
          <p className="mt-1 text-base text-neutral-500">
            Here is your daily overview and AI guidance for today.
          </p>
        </div>

        {/* Goal Banner Card */}
        <Card className="border-neutral-200/80 bg-neutral-900 text-white shadow-sm">
          <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                <Target className="h-4 w-4" />
                <span>Main Goal</span>
              </div>
              <div className="text-xl font-bold sm:text-2xl">
                {isLoading ? (
                  <span className="animate-pulse text-neutral-500">Loading goal...</span>
                ) : (
                  goal || "No goal selected."
                )}
              </div>
            </div>
            {!isLoading && !goal && (
              <Button
                variant="outline"
                size="sm"
                className="w-fit border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-700 hover:text-white"
                onClick={() => router.push("/onboarding")}
              >
                Set Goal
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Progress Card */}
          <Card className="border-neutral-200/80 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold text-neutral-600">
                Overall Progress
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-neutral-400" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-neutral-900">0%</div>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-neutral-100">
                <div className="h-full w-0 rounded-full bg-neutral-900 transition-all duration-500" />
              </div>
              <p className="mt-3 text-xs text-neutral-500">
                Your journey starts today. Complete your first focus task.
              </p>
            </CardContent>
          </Card>

          {/* AI Mentor Card */}
          <Card className="border-neutral-200/80 shadow-sm md:col-span-1 lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-neutral-900" />
                <CardTitle className="text-sm font-semibold text-neutral-900">
                  AI Mentor Briefing
                </CardTitle>
              </div>
              <span className="text-xs font-medium text-neutral-400">Active Guidance</span>
            </CardHeader>
            <CardContent className="pt-2">
              <p className="text-sm leading-relaxed text-neutral-600">
                {goal
                  ? `Welcome aboard! I've initialized your roadmap for "${goal}". Focus on completing your first tasks today to build your momentum.`
                  : "Welcome to North AI! Set your primary goal to activate personalized guidance and daily roadmap updates."}
              </p>
            </CardContent>
          </Card>

          {/* Today's Focus Card */}
          <Card className="border-neutral-200/80 shadow-sm md:col-span-2 lg:col-span-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="text-base font-bold text-neutral-900">
                  Today&apos;s Focus
                </CardTitle>
                <CardDescription className="text-xs text-neutral-500">
                  Key milestones to clear today
                </CardDescription>
              </div>
              <Calendar className="h-4 w-4 text-neutral-400" />
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {tasks.map((task, index) => (
                  <li
                    key={task}
                    className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50/60 p-3.5 text-sm font-medium text-neutral-800 transition-colors hover:border-neutral-200 hover:bg-neutral-50"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-neutral-300 transition-colors hover:text-neutral-900" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}