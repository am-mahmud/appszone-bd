export default function ContactPage() {
  return (
    <main className="bg-[#0a0a1a] min-h-screen">
      {/* Hero */}
      <section className="py-24 text-center px-6">
        <p className="text-purple-400 text-sm uppercase tracking-widest mb-3">
          Get In Touch
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
          Contact Us
        </h1>
        <p className="text-white/50 text-base max-w-xl mx-auto">
          Have a project in mind? We would love to hear about it. Send us a message
          and we will get back to you within 24 hours.
        </p>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left — Contact Info */}
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                Email
              </p>
              <p className="text-white text-sm">info@appszonebd.com</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                Phone
              </p>
              <p className="text-white text-sm">+880 1700-000000</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                Address
              </p>
              <p className="text-white text-sm">Dhaka, Bangladesh</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
                Office Hours
              </p>
              <p className="text-white text-sm">Saturday – Thursday</p>
              <p className="text-white/40 text-sm">9:00 AM – 6:00 PM (BST)</p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-white font-semibold text-lg mb-6">
              Send a Message
            </h2>

            <form className="space-y-4">
              <div>
                <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-purple-500/60"
                />
              </div>

              <div>
                <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-purple-500/60"
                />
              </div>

              <div>
                <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">
                  Service
                </label>
                <select className="w-full bg-[#0a0a1a] border border-white/10 rounded-xl px-4 py-3 text-white/70 text-sm outline-none focus:border-purple-500/60">
                  <option value="">Select a service</option>
                  <option>Web Development</option>
                  <option>Custom Software Development</option>
                  <option>Web Hosting</option>
                  <option>Professional Email</option>
                  <option>ICT Infrastructure</option>
                  <option>Mobile App Development</option>
                </select>
              </div>

              <div>
                <label className="text-white/40 text-xs uppercase tracking-widest block mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none focus:border-purple-500/60 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm py-3 rounded-xl transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
