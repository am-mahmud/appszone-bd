import {
  Layout,
  Smartphone,
  RefreshCw,
  Plug,
  BarChart2,
  Code2,
  ArrowRight,
  ArrowUpRight,
  MonitorSmartphone,
  Layers,
  Cpu,
  Zap,
  Users,
  GitMerge,
  Globe,
  Lock,
  BarChart,
  Workflow,
} from "lucide-react";

const offerings = [
  { icon: Layout, label: "Personalized Software Creation" },
  { icon: Smartphone, label: "Mobile and Web Applications" },
  { icon: RefreshCw, label: "Updating Legacy Systems" },
  { icon: Plug, label: "APIs and System Integrations" },
  { icon: BarChart2, label: "Data Analytics and Business Intelligence" },
  { icon: Code2, label: ".NET Application Development" },
];

const features = [
  {
    title: "Mobile & Web Apps",
    titleDesc: "We craft digital experiences that work beautifully across every device — fast, intuitive, and built to retain users from the first interaction.",
    desc: "Let our UI/UX professionals build mobile and web apps that streamline operations for your team and provide an unparalleled experience for your clients.",
    points: [
      { icon: MonitorSmartphone, label: "Cross-Platform Apps", desc: "iOS, Android, and web from a single codebase." },
      { icon: Users, label: "User-First UI/UX", desc: "Interfaces designed for real users, not developers." },
      { icon: Zap, label: "Performance Optimized", desc: "Fast load times and smooth interactions built in." },
      { icon: Layers, label: "Modern Stack", desc: "Built with React Native, Flutter, and Next.js." },
    ],
    dark: true,
  },
  {
    title: "Custom Software Development",
    titleDesc: "Every business is unique. We build software that fits your operations precisely — not the other way around.",
    desc: "We build software tailored exactly to your operational requirements. Every solution is designed around your workflow, your team, and your business goals.",
    extra: "We design and build software that fits your operations precisely — not generic tools that force you to change how you work. Every feature and every integration is planned around your team's real needs.",
    points: [
      { icon: Cpu, label: "Technical Scoping", desc: "Deep requirements analysis before writing a line of code." },
      { icon: Workflow, label: "Agile Process", desc: "Regular updates and demos throughout development." },
      { icon: Code2, label: "Full Documentation", desc: "Complete handover with docs and team training." },
      { icon: RefreshCw, label: "Post-Launch Support", desc: "Ongoing support and iterative improvements." },
    ],
    dark: false,
  },
  {
    title: "APIs & Integrations",
    titleDesc: "Your tools should work together seamlessly. We connect everything in your tech stack into one unified, reliable system.",
    desc: "We connect your systems, tools, and platforms through robust API integrations — whether it is a third-party service, a payment gateway, or an internal tool.",
    points: [
      { icon: GitMerge, label: "REST & GraphQL", desc: "Modern API development for any use case." },
      { icon: Plug, label: "Third-Party Services", desc: "Connect any external platform or SaaS tool." },
      { icon: Globe, label: "Payment Gateways", desc: "Secure integration with Stripe, PayPal, and more." },
      { icon: Lock, label: "Secure by Default", desc: "Auth, encryption, and rate limiting built in." },
    ],
    dark: true,
  },
];

export default function WebDevelopmentPage() {
  return (
    <main className="bg-[#0a0a1a] min-h-screen">

      {/* ── Hero ─────────────────────────────────────── */}
      <section className="pt-24 pb-16 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tight mb-6">
              Web
              <br />
              <span className="text-white/20">Development</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-4">
              AI-driven, secure, and scalable web solutions. From custom apps to
              legacy modernization — we build what your business needs to grow.
            </p>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-8">
              Obtain tailored software solutions that align with both your
              business needs and budget. Every project starts with understanding
              your goals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Offerings ────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Obtain the tailored software solutions that align with both your
              business needs and budget.
            </h2>
          </div>
          <div className="divide-y divide-gray-100">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center justify-between py-4 group cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-purple-500" strokeWidth={1.5} />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">
                      {item.label}
                    </span>
                  </div>
                  {/* <ArrowUpRight className="w-4 h-4 text-gray-300 flex-shrink-0 ml-4" /> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Feature Sections ─────────────────────────── */}
      {features.map((feature) => (
        <section
          key={feature.title}
          className={`py-24 px-6 ${feature.dark ? "bg-[#0f0f1f]" : "bg-white"}`}
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <h2
                className={`text-4xl md:text-5xl font-bold leading-tight mb-4 ${
                  feature.dark ? "text-white" : "text-gray-900"
                }`}
              >
                {feature.title}
              </h2>
              <p
                className={`text-sm leading-relaxed mb-4 ${
                  feature.dark ? "text-white/30" : "text-gray-400"
                }`}
              >
                {feature.titleDesc}
              </p>
              <p
                className={`text-sm leading-relaxed ${
                  feature.dark ? "text-white/40" : "text-gray-500"
                }`}
              >
                {feature.desc}
              </p>
              {feature.extra && (
                <p className="text-sm leading-relaxed text-gray-500 mt-3">
                  {feature.extra}
                </p>
              )}
            </div>

            {/* Right — feature cards */}
            <div className="grid grid-cols-2 gap-3">
              {feature.points.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.label}
                    className={`rounded-xl p-5 ${
                      feature.dark
                        ? "bg-white/5 border border-white/10"
                        : "bg-gray-50 border border-gray-100"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center mb-4 ${
                        feature.dark
                          ? "bg-purple-500/10 border border-purple-500/20"
                          : "bg-purple-50 border border-purple-100"
                      }`}
                    >
                      <Icon className="w-4 h-4 text-purple-400" strokeWidth={1.5} />
                    </div>
                    <p
                      className={`text-sm font-semibold mb-1.5 ${
                        feature.dark ? "text-white/80" : "text-gray-800"
                      }`}
                    >
                      {point.label}
                    </p>
                    <p
                      className={`text-xs leading-relaxed ${
                        feature.dark ? "text-white/30" : "text-gray-400"
                      }`}
                    >
                      {point.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto border border-purple-600 p-10 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Determine the software solutions necessary for your business to
                flourish.
              </h2>
              <p className="text-white/30 text-sm leading-relaxed">
                Talk to our team and we will help you identify the right tech
                stack, approach, and timeline for your project.
              </p>
            </div>
            <div className="md:text-right">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-8 py-3 rounded-xl transition-colors"
              >
                Get in Touch <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}