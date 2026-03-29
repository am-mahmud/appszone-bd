const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description:
      "Free consultation to understand your goals, requirements, and timeline. We create a detailed project plan.",
  },
  {
    number: "02",
    title: "Design & Prototype",
    description:
      "Wireframes and UI mockups created for your review. You approve before a single line of code is written.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Engineers build your product using modern tech stacks with regular updates throughout the process.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We deploy, test, and go live. Ongoing maintenance, monitoring, and support provided post-launch.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0a0a1a] pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-purple-400 text-sm uppercase tracking-widest mb-3">
            Our Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <span className="text-4xl font-bold text-purple-400 mb-4 block">
                {step.number}
              </span>
              <h3 className="text-white font-semibold text-base mb-3">
                {step.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
