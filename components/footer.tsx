"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Handle newsletter subscription
    alert(`Thank you for subscribing with: ${email}`)
    setEmail("")
  }

  return (
    <footer className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 border-4 border-white/30 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Raghunandan Gaushala Logo"
                width={60}
                height={60}
                className="rounded-full border-2 border-emerald-400 p-1 bg-white object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Raghunandan Gaushala</h3>
                <p className="text-xs text-emerald-300">Protecting Cows Since 2010</p>
              </div>
            </div>
            <p className="text-emerald-100 mb-6 leading-relaxed">
              Dedicated to the protection and welfare of cows through compassionate care and sustainable practices.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="text-white hover:text-emerald-200 transition-colors"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Facebook</span>
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="text-white hover:text-emerald-200 transition-colors"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">Instagram</span>
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="text-white hover:text-emerald-200 transition-colors"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">YouTube</span>
                <Youtube size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About Us" },
                { id: "services", label: "Services" },
                { id: "gallery", label: "Gallery" },
                { id: "contact", label: "Contact" },
                { id: "donate", label: "Donate" },
              ].map((item) => (
                <li key={item.id}>
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    className="text-emerald-100 hover:text-white hover:translate-x-1 transition-all flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">›</span> {item.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-300 mt-0.5" />
                <span className="text-emerald-100">
                  123 Rural Village Road
                  <br />
                  District, State, India - 123456
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-300" />
                <span className="text-emerald-100">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-300" />
                <span className="text-emerald-100">info@raghunandangaushala.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-emerald-100 mb-4 leading-relaxed">
              Subscribe to our newsletter to receive updates about our activities and events.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-emerald-800/50 border-emerald-700 text-white placeholder-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 rounded-r-none"
                />
                <Button type="submit" className="bg-emerald-500 hover:bg-emerald-400 text-white rounded-l-none">
                  <Send size={16} />
                </Button>
              </div>
              <p className="text-xs text-emerald-300">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>
        </div>

        <div className="border-t border-emerald-700/50 mt-12 pt-8 text-center">
          <p className="text-emerald-200">
            &copy; {new Date().getFullYear()} Raghunandan Gaushala Seva Trust. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

