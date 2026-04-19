import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import type { FormEvent } from "react";
import { useState } from "react";

const inputClasses =
  "w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all duration-300";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!web3FormsAccessKey) {
      setSubmitMessage({
        type: "error",
        text: "Contact form is not configured yet. Please add VITE_WEB3FORMS_ACCESS_KEY.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio contact from ${formData.name}`,
          from_name: "Portfolio Website",
          replyto: formData.email,
          botcheck: "",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitMessage({ type: "success", text: "Message sent successfully. I will get back to you soon." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitMessage({
          type: "error",
          text: result.message || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setSubmitMessage({
        type: "error",
        text: "Network error while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="font-body text-sm uppercase tracking-[0.3em] text-accent mb-3">Contact</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's work together.
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Have a project in mind? I'd love to hear about it. Drop me a message and let's create something amazing.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "ashmika.nathali123@gmail.com" },
                { icon: MapPin, text: "Kalutara, Sri Lanka" },
              ].map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="flex items-center gap-3 text-muted-foreground group"
                >
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                    <item.icon size={16} className="text-accent" />
                  </div>
                  <span className="font-body text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-5"
          >
            {[
              { type: "text", placeholder: "Your Name", key: "name" as const },
              { type: "email", placeholder: "Your Email", key: "email" as const },
            ].map((field, i) => (
              <motion.div
                key={field.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              >
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.key]}
                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                  required
                  className={inputClasses}
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className={`${inputClasses} resize-none`}
              />
            </motion.div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 border border-border bg-background text-foreground px-6 py-3 rounded-lg font-body font-medium text-sm hover:bg-secondary hover:border-accent/60 hover:text-accent transition-all duration-300 active:bg-accent/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Send size={16} /> {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
            {submitMessage && (
              <p
                className={`font-body text-sm ${
                  submitMessage.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {submitMessage.text}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
