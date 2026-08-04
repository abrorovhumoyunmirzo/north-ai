import { Bot, Map, LineChart } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Mentor",
    description:
      "Your AI mentor keeps you accountable, helps you recover from setbacks and adjusts your roadmap automatically.",
  },
  {
    icon: Map,
    title: "Goal Roadmap",
    description:
      "Break any ambitious goal into clear milestones and daily actions.",
  },
  {
    icon: LineChart,
    title: "Progress Intelligence",
    description:
      "Track consistency, predict risks and receive weekly AI reviews.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            Everything you need to achieve ambitious goals.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
            North AI combines planning, accountability and intelligent coaching into one operating system.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-3 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-sm transition-all hover:border-neutral-300 hover:shadow-md"
              >
                <div>
                  {/* Icon Container */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200/80 bg-neutral-50 text-neutral-900 group-hover:bg-neutral-100">
                    <Icon className="h-6 w-6 stroke-[1.75]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-tight text-neutral-900">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {feature.description}
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