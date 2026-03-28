export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a1a]">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-175 h-125 rounded-full bg-[#4f35b3]/30 blur-[120px]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/70 text-sm mb-8">
          {/* <span className="text-purple-400">✦</span> */}
          Secure. Scalable. AI-Driven.
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Web Development & <br className="hidden md:block" />
          IT Services in Bangladesh
        </h1>

        <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          AppsZone BD builds fast, secure, and scalable digital solutions — from
          custom web apps to managed hosting and full IT infrastructure support.
        </p>
      </div>
    </section>
  );
}
