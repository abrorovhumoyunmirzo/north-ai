"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { saveGoal, saveRoadmap } from "@/lib/storage";
import { detectGoalCategory } from "@/lib/goal-engine";
import { Goal } from "@/types/goal"
import { generateRoadmap } from "@/lib/roadmap-generator";

const sampleGoals = [
  "🎓 Get into university",
  "💪 Gain muscle",
  "🚀 Build my startup",
  "💼 Get my first internship",
];

export default function OnboardingPage() {
  const [goal, setGoal] = useState("");
  const router = useRouter();

  const handleChipClick = (selectedGoal: string) => {
    // Strip emoji for cleaner input state if desired, or keep as full text
    const cleanGoal = selectedGoal.replace(/^[\p{Emoji}\s]+/u, "");
    setGoal(cleanGoal);
  };

  const handleContinue = () => {
    if (!goal.trim()) return;

    const trimmedGoal = goal.trim()

    const goalObject: Goal = {
      id: crypto.randomUUID(),
      title: trimmedGoal,
      category: detectGoalCategory(goal),
      progress: 0,
      createdAt: new Date().toISOString(),
    };

    saveGoal(goalObject);
    
    const roadmap = generateRoadmap(
      goalObject.id,
      goalObject.category
    );

    saveRoadmap(roadmap);

    router.push("/onboarding/step-2")
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-12 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="w-full max-w-xl text-center">
        {/* Logo at the top */}
        <div className="flex justify-center">
          <Logo />
        </div>

        {/* Title & Subtitle */}
        <div className="mt-8 space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Welcome to North AI
          </h1>
          <p className="text-base text-neutral-500 sm:text-lg">
            Let&apos;s build your roadmap together.
          </p>
        </div>

        {/* Main Interactive Card */}
        <Card className="mt-8 border-neutral-200/80 shadow-sm">
          <CardContent className="p-6 sm:p-8">
            <div className="space-y-6 text-left">
              {/* Question */}
              <label
                htmlFor="goal-input"
                className="block text-lg font-semibold text-neutral-900"
              >
                What is your biggest goal?
              </label>

              {/* Large Input */}
              <Input
                id="goal-input"
                type="text"
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="For example: Get into Stanford University"
                className="h-14 border-neutral-200 text-base shadow-none focus-visible:ring-neutral-900 sm:text-lg"
              />

              {/* Sample Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {sampleGoals.map((sample) => (
                  <button
                    key={sample}
                    type="button"
                    onClick={() => handleChipClick(sample)}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-100 sm:text-sm"
                  >
                    {sample}
                  </button>
                ))}
              </div>

              {/* Bottom Continue Button */}
              <div className="pt-4">
                <Button
                  onClick={handleContinue}
                  className="h-12 w-full bg-neutral-900 text-base font-medium text-white shadow-sm hover:bg-neutral-800"
                >
                  Continue
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}