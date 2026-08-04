import { Target, Compass, Zap } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Target,
    title: "Define your goal",
    description:
      "Describe your ambition and North AI understands what you're trying to achieve.",
  },
  {
    step: "02",
    icon: Compass,
    title: "Build your roadmap",
    description:
      "North AI creates milestones, weekly plans and daily actions automatically.",
  },
  {
    step: "03",
    icon: Zap,
    title: "Stay consistent",
    description:
      "Receive AI guidance, adapt your roadmap and keep moving forward every day.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            How North AI works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
            From a single goal to consistent daily progress in three simple steps.
          </p>
        </div>

        {/* Connected Steps Grid */}
        <div className="relative mt-12 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-3 lg:gap-8">
          {/* Connector Line for Desktop */}
          <div
            className="pointer-events-none absolute top-1/2 hidden h-0.5 w-full -translate-y-12 bg-gradient-to-r from-transparent via-neutral-200 to-transparent lg:block"
            aria-hidden="true"
          />

          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md"
              >
                <div>
                  {/* Top Bar: Icon and Step Number */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200/80 bg-neutral-50 text-neutral-900">
                      <Icon className="h-6 w-6 stroke-[1.75]" />
                    </div>
                    <span className="text-sm font-bold tracking-widest text-neutral-400">
                      {item.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mt-8 text-xl font-bold tracking-tight text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}