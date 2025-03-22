"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart, Shield, Leaf, Users, Stethoscope, Tractor } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Services({ scrollToSection }) {
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

  const services = [
    {
      icon: <Heart className="h-12 w-12 text-emerald-600" />,
      title: "Cow Rescue & Rehabilitation",
      description:
        "We rescue abandoned, sick, and injured cows and provide them with medical care and rehabilitation in our state-of-the-art facilities.",
    },
    {
      icon: <Shield className="h-12 w-12 text-emerald-600" />,
      title: "Shelter & Protection",
      description:
        "Our gaushala provides a safe and comfortable environment for cows to live with dignity and care, with spacious enclosures and green pastures.",
    },
    {
      icon: <Leaf className="h-12 w-12 text-emerald-600" />,
      title: "Organic Products",
      description:
        "We produce organic cow products like milk, ghee, and compost, promoting sustainable practices and traditional methods of production.",
    },
    {
      icon: <Users className="h-12 w-12 text-emerald-600" />,
      title: "Education & Awareness",
      description:
        "We conduct workshops and tours to educate people about cow protection and sustainable living, spreading knowledge about their importance.",
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-emerald-600" />,
      title: "Veterinary Care",
      description:
        "Our team of experienced veterinarians provides regular health check-ups and emergency medical care to ensure the well-being of all cows.",
    },
    {
      icon: <Tractor className="h-12 w-12 text-emerald-600" />,
      title: "Sustainable Farming",
      description:
        "We practice and promote sustainable farming techniques using cow-based natural fertilizers and traditional agricultural methods.",
    },
  ]

  return (
    <section id="services" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-50"></div>
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
            What We Do
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-700 max-w-3xl mx-auto">
            Discover the various services and initiatives we undertake to ensure the welfare of cows and promote
            sustainable living.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full hover:shadow-xl transition-all border-none bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white px-8 py-6 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
            size="lg"
          >
            Get Involved
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

