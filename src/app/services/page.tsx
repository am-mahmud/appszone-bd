import { servicesMain } from "@/content/services";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="bg-[#0a0a1a] min-h-screen">

      {/* Hero */}
      <section className="py-24 text-center px-6">
        <p className="text-purple-400 text-sm uppercase tracking-widest mb-3">What We Do</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Our Services</h1>
        <p className="text-white/50 text-base max-w-xl mx-auto">
          From web development to managed hosting and IT infrastructure — we cover
          everything your business needs to grow digitally.
        </p>
      </section>

      {/* Services Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesMain.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-7 flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-purple-400" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-lg mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-white/40 text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs bg-white/5 border border-white/10 text-white/50 px-3 py-1 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="/contact"
                  className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Get Started <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Not sure which service you need?</h2>
          <p className="text-white/40 text-sm mb-6">
            Book a free consultation and we will help you figure out the best solution for your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm px-8 py-3 rounded-xl transition-colors"
          >
            Book Free Consultation
          </a>
        </div>
      </section>

    </main>
  );
}