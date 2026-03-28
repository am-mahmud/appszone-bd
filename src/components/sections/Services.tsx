import { servicesHome } from "@/content/services";

export default function Services() {
  return (
    <section className="bg-[#0a0a1a] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-y divide-white/10 border border-white/10">
          {servicesHome.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex flex-col items-center text-center px-10 py-14"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white/70" strokeWidth={1.5} />
                </div>

                <h3 className="text-white font-semibold text-base mb-3">
                  {service.title}
                </h3>

                <p className="text-white/40 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
