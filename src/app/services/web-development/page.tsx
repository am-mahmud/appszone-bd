import {
  Smartphone,
  Code2,
  RefreshCw,
  Plug,
  BarChart2,
  Layout,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

const offerings = [
  {
    icon: Smartphone,
    label: "Mobile & Web Applications",
    desc: "Cross-platform apps built for speed, scale, and seamless user experience.",
  },
  {
    icon: Layout,
    label: "Personalized Software Creation",
    desc: "Custom-built systems designed around your exact business workflow.",
  },
  {
    icon: RefreshCw,
    label: "Updating Legacy Systems",
    desc: "Modernize outdated platforms without disrupting your operations.",
  },
  {
    icon: Plug,
    label: "APIs & System Integrations",
    desc: "Connect your tools, platforms, and services into one unified system.",
  },
  {
    icon: BarChart2,
    label: "Data Analytics & BI",
    desc: "Turn raw data into actionable insights with powerful dashboards.",
  },
  {
    icon: Code2,
    label: ".NET Application Development",
    desc: "Enterprise-grade .NET applications that are secure and maintainable.",
  },
];

const pillars = [
  {
    icon: Zap,
    title: "Performance First",
    desc: "Every product we build is optimized for speed — fast load times, efficient queries, and smooth interactions across all devices.",
  },
  {
    icon: Shield,
    title: "Security by Design",
    desc: "Security is not an afterthought. We integrate best practices from the ground up — authentication, encryption, and compliance built in.",
  },
  {
    icon: Globe,
    title: "Built to Scale",
    desc: "Whether you have 10 users or 10 million, our architecture grows with you. Cloud-native, containerized, and globally deployable.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <main className="bg-[#0a0a1a] min-h-screen">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="pt-24 pb-16 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          {/* Large headline */}
          <div className="max-w-4xl mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tight mb-6">
              Web
              <br />
              <span className="text-white/20">Development</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-4">
              AI-driven, secure, and scalable web solutions. From custom apps to
              legacy modernization we build what your business needs to grow.
            </p>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-4">
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

      {/* ── What We Offer ────────────────────────────── */}
      <section className="py-20 px-6 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col  gap-4 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white">
                What Appszone Offer for Web Development
              </h2>
            </div>
            <p className="text-white/30 text-base leading-relaxed">
              A full spectrum of web development services from idea to
              deployment and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 border border-white/5 rounded-2xl overflow-hidden">
            {offerings.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="p-8 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
                    <Icon
                      className="w-4 h-4 text-purple-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">
                    {item.label}
                  </h3>
                  <p className="text-white/30 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Three Pillars ─────────────────────────────── */}
      <section className="py-20 px-6 ">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-purple-400 text-xs uppercase tracking-widest mb-3">
              Our Approach
            </p>
            <h2 className="text-3xl font-bold text-white">How We Build</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                      <Icon
                        className="w-4 h-4 text-purple-400"
                        strokeWidth={1.5}
                      />
                    </div>
                    {/* <span className="text-white/10 text-4xl font-bold">
                      0{i + 1}
                    </span> */}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-3">
                    {p.title}
                  </h3>
                  <p className="text-white/30 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Customized Software ───────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-purple-400 text-xs uppercase tracking-widest mb-3">
              Philosophy
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
              Software Customized to Your Operational Requirements
            </h2>
            <p className="text-white/40 text-sm leading-relaxed">
              We design and build software that fits your operations precisely —
              not generic tools that force you to change how you work. Every
              feature, every workflow, and every integration is planned around
              your teams real needs. The result is a system your staff actually
              uses, your clients actually enjoy, and your business benefits from
              — from day one.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
              <Code2 className="w-5 h-5 text-purple-400" strokeWidth={1.5} />
            </div>
            <div className="space-y-3">
              {[
                "Built around your workflow, not the other way around",
                "Every feature justified by a real business need",
                "Handover with full documentation and training",
                "Post-launch support and iterative improvements",
                "Transparent process with regular progress updates",
              ].map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 border-b border-white/5 pb-3"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-purple-400 flex-shrink-0.5"
                    strokeWidth={1.5}
                  />
                  <span className="text-white/50 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto border border-purple-600 p-10 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Determine the software solutions necessary for your business to
                flourish.
              </h2>
              <p className="text-white/30 text-sm leading-relaxed mb-6">
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
