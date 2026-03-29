import {
  ArrowRight,
  ClipboardList,
  Cpu,
  Users,
  LifeBuoy,
  Settings,
  Building2,
  Layers,
  ShoppingCart,
  MonitorSmartphone,
  Headphones,
  CheckCircle2,
  MoveRight,
} from "lucide-react";

const platformFeatures = [
  "Intuitive and easy-to-navigate design",
  "Support for multiple operating systems — iOS, Android, Windows",
  "Tailored features to meet specific business needs",
  "Seamless integration with existing systems and third-party services",
  "Rigorous testing for bugs and performance issues",
];

const contactCenterFeatures = [
  "Automated process workflows to reduce manual effort",
  "Self-service customer portals for faster resolution",
  "Omnichannel CX across voice, chat, email, and social",
  "Productivity dashboards for agents and supervisors",
  "Real-time reporting and performance analytics",
];

const middlewareFeatures = [
  "Web application middleware and API gateways",
  "ERP system integration and data bridging",
  "CRM platform connectivity and sync",
  "Cloud environment orchestration",
  "Data management and pipeline automation",
];

const erpFeatures = [
  "Real-time inventory sync across all channels",
  "Automated order management and fulfillment",
  "Unified customer data across ERP and storefront",
  "Live finance reporting and reconciliation",
  "Seamless third-party marketplace integration",
];

export default function SoftwareDevelopmentPage() {
  return (
    <main className="bg-[#0a0a1a] min-h-screen">
      {/* ── Hero ─────────────────────────────────────── */}

      <section className="pt-24 pb-16 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          {/* Large headline */}
          <div className="max-w-4xl mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tight mb-6">
              Custom Software
              <br />
              <span className="text-white/20">Solutions</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-4">
              Obtain software solutions tailored to your business and growth
              plans.
            </p>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-4">
              We design, build, and maintain systems that fit your exact
              operational needs from enterprise platforms to custom integrations
              and everything in between.
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

      {/* ── Middleware Section ────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-purple-400 text-xs uppercase tracking-widest mb-3">
              Middleware
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              Tailored Middleware Solutions
            </h2>
            <p className="text-white/30 text-sm mb-4">
              PIM and PCM solutions built around your exact environment.
            </p>
            <p className="text-white/40 text-sm leading-relaxed">
              Whether you require middleware for web apps, system architecture,
              data management, ERP systems, CRM or cloud environments, we offer
              bespoke PIM and PCM solutions tailored to your exact needs.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
              <Layers className="w-5 h-5 text-purple-400" strokeWidth={1.5} />
            </div>
            <div className="space-y-3">
              {middlewareFeatures.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 border-b border-white/5 pb-3"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-purple-400 shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <span className="text-white/50 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ERP Section ──────────────────────────────── */}
      <section className="py-20 px-6 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-purple-400 text-xs uppercase tracking-widest mb-3">
              ERP
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              Enhancing ERP for E-Commerce Platforms
            </h2>
            <p className="text-white/30 text-sm mb-4">
              Unify and upgrade your ERP backend with your e-commerce solution.
            </p>
            <p className="text-white/40 text-sm leading-relaxed">
              We integrate and upgrade your ERP systems to work seamlessly with
              modern e-commerce platforms. The result is a unified backend that
              reduces manual work, eliminates data silos, and gives your team
              real-time visibility across inventory, orders, customers, and
              finance.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
              <ShoppingCart
                className="w-5 h-5 text-purple-400"
                strokeWidth={1.5}
              />
            </div>
            <div className="space-y-3">
              {erpFeatures.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 border-b border-white/5 pb-3"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <span className="text-white/50 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Corporate Management Platforms ───────────── */}
      <section className="py-20 px-6 ">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-purple-400 text-xs uppercase tracking-widest mb-3">
              Platforms
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              Corporate Management Platforms
            </h2>
            <p className="text-white/30 text-sm mb-4">
              Tools that help your team work faster and smarter.
            </p>
            <p className="text-white/40 text-sm leading-relaxed">
              Improve your operations with our expertise in automating
              processes, implementing self-service portals, and designing tools
              to enhance team productivity. With our background in delivering
              omnichannel customer experiences across different industries, we
              are prepared to drive your business success.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
              <MonitorSmartphone
                className="w-5 h-5 text-purple-400"
                strokeWidth={1.5}
              />
            </div>
            <div className="space-y-3">
              {platformFeatures.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 border-b border-white/5 pb-3"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-purple-400 shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <span className="text-white/50 text-sm">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Center ────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-purple-400 text-xs uppercase tracking-widest mb-3">
              Support
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              Contact Center Systems
            </h2>
            <p className="text-white/30 text-sm mb-4">
              Create bespoke call center tools to achieve stellar customer
              support.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              We improve your contact center with automation, self-service
              customer portals, and productivity tools. With experience
              delivering omnichannel customer experiences across multiple
              industries, we are equipped to elevate your support operations to
              the next level.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
              <Headphones
                className="w-5 h-5 text-purple-400"
                strokeWidth={1.5}
              />
            </div>
            <div className="space-y-3">
              {contactCenterFeatures.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 border-b border-white/5 pb-3"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-purple-400 shrink-0 mt-0.5"
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
                Ready to build something custom?
              </h2>
              <p className="text-white/30 text-sm leading-relaxed mb-6">
                Tell us about your project and we will scope a solution that
                fits your business needs and budget exactly.
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
