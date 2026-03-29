import { ArrowRight } from "lucide-react";

const sections = [
  {
    tag: "Networking",
    title: "Network Design & Deployment",
    desc: "We design and deploy wired and wireless networks that are fast, secure, and built to handle your current and future demands  with proper segmentation, monitoring, and failover in place.",
    features: [
      "LAN, WAN, and wireless network design and deployment",
      "Firewall configuration and perimeter security setup",
      "VLAN segmentation for departments and security zones",
      "Network monitoring with real-time alerting",
      "Structured cabling and rack installation",
    ],
  },
  {
    tag: "Servers",
    title: "Server Setup & Administration",
    desc: "Whether you need on-premise servers, a virtualized data center, or a hybrid environment  we handle procurement, setup, configuration, and ongoing administration.",
    features: [
      "Physical and virtual server procurement and setup",
      "Windows Server and Linux server administration",
      "Hypervisor setup  VMware, Hyper-V, Proxmox",
      "Server performance tuning and capacity planning",
      "Hardware maintenance and lifecycle management",
    ],
  },
  {
    tag: "Cloud",
    title: "Cloud Migration & Management",
    desc: "We plan and execute cloud migrations with minimal disruption. From lift-and-shift to full cloud-native rearchitecture  we find the approach that fits your budget, timeline, and requirements.",
    features: [
      "Cloud migration planning and execution",
      "AWS, Azure, and Google Cloud deployment",
      "Hybrid cloud architecture design",
      "Cloud cost optimization and resource management",
      "Disaster recovery and business continuity planning",
    ],
  },
  {
    tag: "Managed Support",
    title: "Ongoing IT Support & Monitoring",
    desc: "Our managed support service keeps your infrastructure running at peak performance. We monitor your systems around the clock and respond to incidents fast.",
    features: [
      "Proactive monitoring of all infrastructure components",
      "Remote and on-site technical support",
      "Incident response and root cause analysis",
      "Regular system health checks and reporting",
      "IT documentation and asset management",
    ],
  },
];

export default function ICTInfrastructurePage() {
  return (
    <main className="bg-[#0a0a1a] min-h-screen">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="pt-24 pb-16 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tight mb-6">
              ICT
              <br />
              <span className="text-white/20">Infrastructure</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-4">
              End-to-end IT infrastructure services from network design and
              server deployment to cloud migration and ongoing managed support.
            </p>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-8">
              We plan, build, and manage the technology foundation your business
              runs on so your team can work without interruption and your
              systems can scale without limits.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Sections ─────────────────────────────────── */}
      {sections.map((section) => (
        <section key={section.tag} className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header row */}
            <div className="flex flex-col  gap-6 mb-12">
              <div>
                <p className="text-purple-400 text-xs uppercase tracking-widest mb-3">
                  {section.tag}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {section.title}
                </h2>
                <p className="text-white/30 text-sm max-w-3xl">
                  {section.desc}
                </p>
              </div>
            </div>

            {/* Features as full-width rows */}
            <div>
              {section.features.map((f, i) => (
                <div
                  key={f}
                  className="flex items-center justify-between py-4 border-t border-white/5 group"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-white/50 text-sm group-hover:text-white/80 transition-colors">
                      {f}
                    </span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400/30 group-hover:bg-purple-400 transition-colors shrink-0 ml-4" />
                </div>
              ))}
              <div className="border-t border-white/5" />
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
                Ready to build a stronger IT foundation?
              </h2>
              <p className="text-white/30 text-sm leading-relaxed">
                Tell us about your infrastructure needs and we will design a
                solution that fits your scale, budget, and timeline.
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
