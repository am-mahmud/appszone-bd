import { CheckCircle } from "lucide-react";
import { points, stats, timeline } from "@/content/about";


export default function WhoWeAre() {
  return (
    <section className="bg-[#0a0a1a] py-20 space-y-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-purple-400 text-sm uppercase tracking-widest mb-3">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              About AppsZone BD
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-6">
              AppsZone BD is a forward-thinking software development company
              delivering AI-powered, secure, and scalable digital solutions.
              Founded in 2016, we specialize in web and mobile applications, AI
              automation, MERN stack development, and smart technology
              solutions.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Our mission is to help businesses grow with future-ready,
              high-performance software built by a dedicated expert team based
              in Dhaka, Bangladesh.
            </p>

            <a
              href="#"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Work With Us
            </a>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4"
              >
                <CheckCircle
                  className="w-5 h-5 text-purple-400 shrink-0"
                  strokeWidth={1.5}
                />
                <span className="text-white/70 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto not-[]:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
      </div>

      {/* Timeline */}
      <div className="px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-purple-400 text-sm uppercase tracking-widest mb-3">
              Our History
            </p>
            <h2 className="text-3xl font-bold text-white">
              The Genesis of Our Journey
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line — left-5 = 20px = center of w-10 dot */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

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
      </div>
    </section>
  );
}
