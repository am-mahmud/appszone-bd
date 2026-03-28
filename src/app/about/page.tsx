import { stats, timeline } from "@/content/about";

export default function AboutPage() {
  return (
    <main className="bg-[#0a0a1a] min-h-screen">
      {/* Hero */}
      <section className="py-24 text-center px-6">
        <p className="text-purple-400 text-sm uppercase tracking-widest mb-3">
          Who We Are
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
          About AppsZone BD
        </h1>
        <p className="text-white/50 text-base leading-relaxed max-w-2xl mx-auto">
          A forward-thinking software development company delivering AI-powered,
          secure, and scalable digital solutions since 2016 based in Dhaka,
          Bangladesh.
        </p>
      </section>

      {/* Stats */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
            >
              <p className="text-3xl font-bold text-purple-400 mb-1">
                {stat.value}
              </p>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-purple-400 text-sm uppercase tracking-widest mb-3">
              Our History
            </p>
            <h2 className="text-3xl font-bold text-white">
              The Genesis of Our Journey
            </h2>
          </div>

          {/* Timeline items */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4.75 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.date} className="relative flex gap-6">
                  {/* Dot */}
                  <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-[#0a0a1a] border border-purple-500/60 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                  </div>

                  {/* Card */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs text-white/30">{item.date}</span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-base mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    {item.links.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {item.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-purple-400 hover:text-purple-300 underline underline-offset-2"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
