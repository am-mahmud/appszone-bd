import {
  ArrowRight,
  CheckCircle2,
  Mail,
  ShieldCheck,
  Users,
  Server,
} from "lucide-react";

const sections = [
  {
    icon: Mail,
    tag: "Deliverability",
    title: "Emails That Always Reach the Inbox",
    sub: "Proper authentication, reputation management, and configuration from day one.",
    desc: "Poor email configuration leads to messages landing in spam. We set up your domain with full authentication protocols and monitor your sender reputation to ensure every email you send reaches its destination reliably.",
    features: [
      "Custom domain email addresses for your entire team",
      "SPF, DKIM, and DMARC authentication configured",
      "High sender reputation with major email providers",
      "Dedicated IP addresses for enterprise accounts",
      "Bounce and spam rate monitoring and management",
    ],
  },
  {
    icon: ShieldCheck,
    tag: "Security",
    title: "Enterprise-Grade Email Security",
    sub: "Protect your team and your clients from threats at every layer.",
    desc: "Email is the number one attack vector for businesses. We protect your organization with multi-layered security encryption, phishing filters, spam protection, and real-time threat detection so your team can communicate with confidence.",
    features: [
      "End-to-end encryption for all incoming and outgoing mail",
      "Advanced spam and phishing protection filters",
      "Two-factor authentication for all accounts",
      "Malware and attachment scanning on every email",
      "Audit logs and admin visibility across all accounts",
    ],
  },
  {
    icon: Users,
    tag: "Team Management",
    title: "Manage Your Entire Team From One Place",
    sub: "One admin panel. Full visibility. Complete control.",
    desc: "Add and remove users, set permissions, create shared mailboxes, and manage distribution lists all from a single admin dashboard. Whether your team is 5 people or 500, management stays simple and centralized.",
    features: [
      "Centralized admin panel to manage all team accounts",
      "Shared mailboxes and distribution lists",
      "Role-based access control for sensitive inboxes",
      "Webmail access from any browser, any device",
      "Mobile app support for iOS and Android",
    ],
  },
  {
    icon: Server,
    tag: "Infrastructure",
    title: "Reliable Infrastructure Built for Uptime",
    sub: "Your email never sleeps and neither does our infrastructure.",
    desc: "Our email servers are redundant, globally distributed, and monitored around the clock. We handle migrations, scaling, and maintenance so you can focus on running your business not managing mail servers.",
    features: [
      "99.9% uptime SLA with redundant mail servers",
      "Automatic daily backups of all mailbox data",
      "Scalable storage grow without migrating",
      "Global server locations for low-latency delivery",
      "Seamless migration from Gmail, Outlook, or cPanel",
    ],
  },
];

export default function ProfessionalEmailPage() {
  return (
    <main className="bg-[#0a0a1a] min-h-screen">
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="pt-24 pb-16 px-6 border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tight mb-6">
              Professional
              <br />
              <span className="text-white/20">Email Service</span>
            </h1>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-4">
              Business email built for reliability, security, and scale. Your
              brand on every message delivered to the inbox, every time.
            </p>
            <p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-8">
              From single-person startups to large enterprise teams we
              configure, manage, and maintain your email infrastructure so you
              never have to think about it.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              Star a Project <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Sections ─────────────────────────────────── */}
      {sections.map((section) => {
        // const Icon = section.icon;
        return (
          <section key={section.tag} className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              {/* Top row */}
              <div className="flex flex-col md:flex-row justify-between gap-6 pb-10 border-b border-white/5 mb-10">
                <div>
                  <p className="text-purple-400 text-xs uppercase tracking-widest mb-2">
                    {section.tag}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {section.title}
                  </h2>
                  {/* <p className="text-white/30 text-sm mt-2">{section.sub}</p> */}
                  <p className="text-white/40 text-sm leading-relaxed max-w-4xl mt-2">
                    {section.desc}
                  </p>
                </div>
              </div>

              {/* Feature row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {section.features.map((f) => (
                  <div
                    key={f}
                    className="bg-white/5 border border-white/10 rounded-xl p-4"
                  >
                    <CheckCircle2
                      className="w-4 h-4 text-purple-400 mb-3"
                      strokeWidth={1.5}
                    />
                    <p className="text-white/50 text-xs leading-relaxed">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto border border-purple-600 p-10 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to set up professional email for your business?
              </h2>
              <p className="text-white/30 text-sm leading-relaxed">
                We handle the full setup domain configuration, migration,
                security, and ongoing management.
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
