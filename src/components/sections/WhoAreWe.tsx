import { CheckCircle } from "lucide-react";

const points = [
  "Custom Web & Mobile App Development",
  "AI-Driven Business Automation",
  "MERN Stack Development",
  "Scalable Learning Management (LMS)",
  "Smart Real Estate Technology Solutions",
  "End-to-end IT Infrastructure Support",
];

export default function WhoWeAre() {
  return (
    <section className="bg-[#0a0a1a] py-20">
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
    </section>
  );
}
