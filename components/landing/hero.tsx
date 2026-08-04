"use client";

import Link from "next/link";
import { ArrowRight, Play, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20 lg:py-24">
      {/* Background Subtle Gradient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-full max-w-7xl -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-100/80 via-transparent to-transparent opacity-70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Copy & Actions */}
          <div className="flex flex-col items-start lg:col-span-6 xl:col-span-6">
            
            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-800 shadow-sm transition-colors hover:border-neutral-300">
              <Sparkles className="h-3.5 w-3.5 text-neutral-600" />
              <span>AI Goal Operating System</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Build your future <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent">
                with AI.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              North AI helps students and creators transform ambitious goals into daily progress using an AI mentor, personal roadmap, and intelligent planning.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Button size="lg" asChild className="group bg-neutral-900 text-white shadow-sm hover:bg-neutral-800">
                <Link href="/get-started" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild className="border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900">
                <Link href="#demo" className="flex items-center gap-2">
                  <Play className="h-4 w-4 fill-current text-neutral-500" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            {/* Statistics */}
            <div className="mt-12 grid w-full max-w-md grid-cols-3 gap-4 border-t border-neutral-100 pt-8 sm:gap-6">
              <div>
                <div className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">10x</div>
                <div className="mt-1 text-xs font-medium text-neutral-500 sm:text-sm">More Focus</div>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">Daily</div>
                <div className="mt-1 text-xs font-medium text-neutral-500 sm:text-sm">AI Guidance</div>
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">100%</div>
                <div className="mt-1 text-xs font-medium text-neutral-500 sm:text-sm">Personalized</div>
              </div>
            </div>
          </div>

          {/* Right Column: SaaS Dashboard Preview Card */}
          <div className="relative lg:col-span-6 xl:col-span-6">
            
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-neutral-200 via-neutral-100 to-neutral-200 opacity-50 blur-xl" />

            {/* Dashboard Card Container */}
            <div className="relative rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-xl shadow-neutral-900/5 sm:p-8">
              
              {/* Window Controls Decorator */}
              <div className="mb-6 flex items-center justify-between border-b border-neutral-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-neutral-200" />
                  <div className="h-3 w-3 rounded-full bg-neutral-200" />
                  <div className="h-3 w-3 rounded-full bg-neutral-200" />
                </div>
                <div className="text-xs font-medium text-neutral-400">Dashboard Preview</div>
              </div>

              {/* Card Grid Content */}
              <div className="space-y-6">
                
                {/* Today's Focus Section */}
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                    Today&apos;s Focus
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    <li className="flex items-center gap-3 rounded-lg border border-neutral-100 bg-neutral-50/60 px-3.5 py-2.5 text-sm font-medium text-neutral-800 transition-colors">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                      <span className="line-through opacity-80">Finish Landing Page</span>
                    </li>
                    <li className="flex items-center gap-3 rounded-lg border border-neutral-100 bg-neutral-50/60 px-3.5 py-2.5 text-sm font-medium text-neutral-800 transition-colors">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                      <span className="line-through opacity-80">SAT Practice</span>
                    </li>
                    <li className="flex items-center gap-3 rounded-lg border border-neutral-100 bg-neutral-50/60 px-3.5 py-2.5 text-sm font-medium text-neutral-800 transition-colors">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                      <span className="line-through opacity-80">Workout</span>
                    </li>
                  </ul>
                </div>

                {/* Progress Bar Section */}
                <div className="rounded-xl border border-neutral-100 bg-neutral-50/40 p-4">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span className="text-neutral-700">Progress</span>
                    <span className="text-neutral-900">78%</span>
                  </div>
                  <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-neutral-200/70">
                    <div className="h-full rounded-full bg-neutral-900 transition-all duration-500" style={{ width: "78%" }} />
                  </div>
                </div>

                {/* AI Mentor Callout */}
                <div className="rounded-xl border border-neutral-200/60 bg-neutral-900 p-4 text-white shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-neutral-800 text-neutral-200">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-neutral-400">AI Mentor</div>
                      <p className="mt-1 text-sm font-medium text-neutral-100">
                        &quot;You&apos;re ahead of schedule.&quot;
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}