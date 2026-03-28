import { comparisonFeatures, plans } from "@/content/hositng";
import { Check } from "lucide-react";

export default function HostingPage() {
  return (
    <main className="bg-[#0a0a1a] min-h-screen">

      {/* Hero */}
      <section className="py-24 text-center px-6">
        <p className="text-purple-400 text-sm uppercase tracking-widest mb-3">Hosting Plans</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
          Reliable Hosting for Every Need
        </h1>
        <p className="text-white/50 text-base max-w-xl mx-auto">
          From shared hosting for small sites to dedicated servers for enterprise apps —
          all plans include free SSL, backups, and 24/7 support.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 flex flex-col ${
                plan.popular
                  ? "bg-purple-600/20 border-2 border-purple-500/60"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tag */}
              <span className="text-xs text-purple-400 uppercase tracking-widest mb-3 block">
                {plan.tag}
              </span>

              {/* Name */}
              <h3 className="text-white font-bold text-lg mb-1">{plan.name}</h3>

              {/* Description */}
              <p className="text-white/40 text-xs leading-relaxed mb-5">{plan.description}</p>

              {/* Price */}
              <div className="flex items-end gap-1 mb-6">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-white/40 text-sm mb-1">{plan.period}</span>
              </div>

              {/* CTA */}
              <a
                href={plan.href}
                className={`text-center text-sm font-semibold py-2.5 rounded-xl mb-6 transition-colors ${
                  plan.popular
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {plan.cta}
              </a>

              {/* Features */}
              <ul className="space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-white/50 text-xs">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">Plan Comparison</h2>
            <p className="text-white/40 text-sm mt-2">See exactly what is included in each plan</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white/40 font-medium px-6 py-4">Feature</th>
                  <th className="text-center text-white font-semibold px-4 py-4">Shared</th>
                  <th className="text-center text-purple-400 font-semibold px-4 py-4">VPS</th>
                  <th className="text-center text-white font-semibold px-4 py-4">Dedicated</th>
                  <th className="text-center text-white font-semibold px-4 py-4">Reseller</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-white/5 ${
                      index % 2 === 0 ? "bg-white/2" : ""
                    }`}
                  >
                    <td className="text-white/50 px-6 py-3">{row.feature}</td>
                    <td className="text-center text-white/50 px-4 py-3">{row.shared}</td>
                    <td className="text-center text-purple-400 px-4 py-3">{row.vps}</td>
                    <td className="text-center text-white/50 px-4 py-3">{row.dedicated}</td>
                    <td className="text-center text-white/50 px-4 py-3">{row.reseller}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Need a custom hosting plan?</h2>
          <p className="text-white/40 text-sm mb-6">
            We can build a hosting package tailored exactly to your requirements and budget.
          </p>
          
          <a
            href="/contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-8 py-3 rounded-xl transition-colors"
          >
            Talk to Us
          </a>
        </div>
      </section>

    </main>
  );
}