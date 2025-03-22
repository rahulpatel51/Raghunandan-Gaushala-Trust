"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzzJvUoprTQkTJJho3guKNztmlLnpMhWMMAANfFPpuwxlgjW9uIwBGnYTs1aTNGJmK4/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("❌ Fetch Error:", error);
      alert("Submission failed! Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block px-4 py-1 mb-4 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium"
          >
            Get In Touch
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-700 max-w-3xl mx-auto">
            Have questions or want to get involved? Reach out to us through any of the following channels.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>

            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-700">+91 98765 43210</p>
                  <p className="text-gray-700">+91 12345 67890</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-700">info@raghunandangaushala.org</p>
                  <p className="text-gray-700">support@raghunandangaushala.org</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-700">
                    Raghunandan Gaushala Seva Trust
                    <br />
                    123 Rural Village Road
                    <br />
                    District, State, India - 123456
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                  placeholder="Subject"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                  placeholder="Your Message"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white py-6 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all group ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                size="lg"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}