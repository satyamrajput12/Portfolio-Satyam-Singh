"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin, MapPin, ArrowUpRight, Send } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { basics } = resumeData;

  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending message...");
    const formData = new FormData(event.currentTarget);

    // IMPORTANT: Get access key from https://web3forms.com/ and replace this
    formData.append("access_key", "87a5e0bf-1ed8-4709-8fe0-a466e2d8dc6f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult(data.message || "Failed to send message.");
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    }
    setIsSubmitting(false);

    setTimeout(() => {
      setResult("");
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
          <span className="font-mono text-sm text-[#00d4ff] mb-2 block">// 06</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">Contact</h2>
          <p className="font-body text-white/50 mb-12">Let's connect and build something great together.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Contact Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-8 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.05), rgba(124,58,237,0.05))", boxShadow: "0 0 40px rgba(0,212,255,0.08)" }}>
            <h3 className="font-display text-2xl font-bold text-white mb-2">Send me a message</h3>
            <p className="font-body text-white/60 mb-6 text-sm">
              I'll get back to you as soon as possible.
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-xs font-mono text-white/50 pl-1">Name</label>
                <input type="text" id="name" name="name" required placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/10 transition-all" />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-xs font-mono text-white/50 pl-1">Email</label>
                <input type="email" id="email" name="email" required placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/10 transition-all" />
              </div>
              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-mono text-white/50 pl-1">Message</label>
                <textarea id="message" name="message" required placeholder="Hello Satyam, I'd like to discuss..." rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/10 transition-all resize-none"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-display font-semibold text-sm transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed group"
                style={{ background: "linear-gradient(135deg, #00d4ff, #7c3aed)", color: "#fff" }}>
                <span>{isSubmitting ? "Sending..." : "Submit Message"}</span>
                {!isSubmitting && <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>

              {result && (
                <div className={`p-3 rounded-lg text-sm font-medium text-center ${result.includes("Success") ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-white/10 text-white/80 border border-white/20"}`}>
                  {result}
                </div>
              )}
            </form>
          </motion.div>

          {/* Right: Contact details */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: basics.email, href: `mailto:${basics.email}` },
              { icon: Phone, label: "Phone", value: basics.phone, href: `tel:${basics.phone}` },
              { icon: Github, label: "GitHub", value: "satyamrajput12", href: basics.github },
              { icon: Linkedin, label: "LinkedIn", value: "satyam-singh21", href: basics.linkedin },
              { icon: MapPin, label: "Location", value: basics.location, href: null },
            ].map((item) => {
              const Icon = item.icon;
              const inner = (
                <div className="flex items-center gap-4 glass rounded-xl p-4 glass-hover transition-all">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}>
                    <Icon size={16} style={{ color: "#00d4ff" }} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-white/40">{item.label}</p>
                    <p className="font-body text-sm text-white/80">{item.value}</p>
                  </div>
                  {item.href && <ArrowUpRight size={14} className="ml-auto text-white/20" />}
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="block">{inner}</a>
              ) : (
                <div key={item.label}>{inner}</div>
              );
            })}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/30">© 2025 Satyam Singh. Built with Next.js & Framer Motion.</p>
          <p className="font-mono text-xs text-white/20">UI/UX Designer · LPU · India</p>
        </div>
      </div>
    </section>
  );
}
