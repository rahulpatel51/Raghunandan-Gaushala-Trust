"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-b from-emerald-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>

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
            Our Story
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our Trust
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-700 max-w-3xl mx-auto">
            Learn about our mission, vision, and the journey of Raghunandan Gaushala Seva Trust.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=1000&auto=format&fit=crop"
                alt="Our Gaushala"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-200 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-emerald-400 rounded-2xl -z-10"></div>

            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-lg p-4 z-20">
              <p className="text-emerald-800 font-medium text-center">Established in 2010</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger
                  value="mission"
                  className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800"
                >
                  Mission
                </TabsTrigger>
                <TabsTrigger
                  value="vision"
                  className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800"
                >
                  Vision
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800"
                >
                  History
                </TabsTrigger>
              </TabsList>

              <TabsContent value="mission" className="mt-0">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-4">Our Mission</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Raghunandan Gaushala Seva Trust is dedicated to the protection and welfare of cows. We provide
                    shelter, food, and medical care to abandoned, sick, and injured cows, giving them a safe and loving
                    environment to live in dignity.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We also work to raise awareness about the importance of cows in our ecosystem and promote
                    sustainable practices that benefit both cows and the environment. Our goal is to create a model of
                    compassionate care that can be replicated across the country.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h4 className="font-bold text-emerald-800 mb-2">Rescue & Rehabilitation</h4>
                      <p className="text-sm text-gray-600">Saving abandoned and injured cows</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h4 className="font-bold text-emerald-800 mb-2">Medical Care</h4>
                      <p className="text-sm text-gray-600">Providing healthcare to all cows</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="vision" className="mt-0">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-4">Our Vision</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    We envision a world where every cow is treated with respect and compassion. Our goal is to create a
                    model gaushala that not only provides care for cows but also serves as an educational center for
                    sustainable living.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We aim to develop self-sustaining practices that utilize cow products in an ethical manner,
                    promoting organic farming and traditional knowledge systems. Through our work, we hope to inspire a
                    new generation of cow protectors and environmental stewards.
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h4 className="font-bold text-emerald-800 mb-2">Sustainable Practices</h4>
                      <p className="text-sm text-gray-600">Eco-friendly gaushala management</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg">
                      <h4 className="font-bold text-emerald-800 mb-2">Education Center</h4>
                      <p className="text-sm text-gray-600">Teaching traditional cow care</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="history" className="mt-0">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100">
                  <h3 className="text-2xl font-bold text-emerald-800 mb-4">Our History</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Founded in 2010, Raghunandan Gaushala Seva Trust began with just a handful of rescued cows. Over the
                    years, we have grown to provide shelter to hundreds of cows, thanks to the generous support of our
                    donors and volunteers.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our journey has been one of dedication, perseverance, and unwavering commitment to the welfare of
                    cows, guided by our spiritual and cultural values. From humble beginnings, we have expanded our
                    facilities and services to become one of the region's most respected cow protection organizations.
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center">
                      <div className="w-20 text-emerald-800 font-bold">2010</div>
                      <div className="flex-1 bg-emerald-50 p-2 rounded-lg text-sm">Foundation of the trust</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 text-emerald-800 font-bold">2015</div>
                      <div className="flex-1 bg-emerald-50 p-2 rounded-lg text-sm">Expanded to 10 acres of land</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-20 text-emerald-800 font-bold">2020</div>
                      <div className="flex-1 bg-emerald-50 p-2 rounded-lg text-sm">Opened veterinary hospital</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

