"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Regular Donor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
      quote:
        "Supporting this gaushala has been one of the most fulfilling experiences of my life. The dedication and love with which they care for the cows is truly inspiring.",
    },
    {
      name: "Priya Patel",
      role: "Volunteer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
      quote:
        "I've been volunteering at the gaushala for over a year now, and it's amazing to see how each cow has its own personality. The staff treats them like family.",
    },
    {
      name: "Amit Singh",
      role: "Visitor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
      quote:
        "Visiting the gaushala was an eye-opening experience for my children. They learned so much about cow protection and sustainable living. Highly recommended for families!",
    },
  ]

  return (
    <section id="testimonials" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
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
            className="inline-block px-4 py-1 mb-4 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
          >
            Testimonials
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What People Say
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-amber-500 mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-700 max-w-3xl mx-auto">
            Hear from our supporters, volunteers, and visitors about their experiences with Raghunandan Gaushala Seva
            Trust.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full hover:shadow-xl transition-all border-none bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-6 text-amber-500 flex">
                      {"★★★★★".split("").map((star, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * i + 0.5 }}
                        >
                          {star}
                        </motion.span>
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                    <div className="mt-auto flex items-center">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full mr-4 border-2 border-emerald-500 object-cover"
                      />
                      <div>
                        <p className="font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

