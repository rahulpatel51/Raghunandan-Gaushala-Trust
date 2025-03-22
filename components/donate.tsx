"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Heart, Leaf, Users, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Donate() {
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

  return (
    <section id="donate" ref={ref} className="py-20 bg-gradient-to-b from-emerald-50 to-white relative overflow-hidden">
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
            Make A Difference
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Support Our Cause
          </motion.h2>
          <motion.div variants={itemVariants} className="w-20 h-1 bg-emerald-600 mx-auto mb-6"></motion.div>
          <motion.p variants={itemVariants} className="text-gray-700 max-w-3xl mx-auto">
            Your generous donations help us provide food, shelter, and medical care to our cows. Every contribution
            makes a difference.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Donate?</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Care for Abandoned Cows</h4>
                  <p className="text-gray-700">
                    Your donation helps us rescue and care for abandoned, sick, and injured cows, providing them with a
                    safe and loving home.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Sustainable Practices</h4>
                  <p className="text-gray-700">
                    Support our efforts to develop sustainable and eco-friendly practices that benefit both the cows and
                    the environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Community Development</h4>
                  <p className="text-gray-700">
                    Help us create awareness and educate the community about cow protection and the importance of
                    preserving our cultural heritage.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-xl mb-8">
              <h4 className="font-bold text-amber-800 mb-4">Monthly Expenses</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Feed for one cow</span>
                  <span className="font-bold text-amber-700">₹ 2,500 / month</span>
                </div>
                <div className="h-px bg-amber-200"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Medical care for one cow</span>
                  <span className="font-bold text-amber-700">₹ 1,000 / month</span>
                </div>
                <div className="h-px bg-amber-200"></div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Shelter maintenance per cow</span>
                  <span className="font-bold text-amber-700">₹ 500 / month</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 italic text-center">
              All donations to Raghunandan Gaushala Seva Trust are exempt under Section 80G of the Income Tax Act.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-xl text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Donate Now</h3>

            <div className="mb-8">
              <p className="text-gray-700 mb-6">Scan the QR code below or use our bank details to make a donation.</p>

              <div className="relative mx-auto w-64 h-64 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-amber-500 rounded-2xl -rotate-6"></div>
                <div className="absolute inset-0 bg-white rounded-2xl">
                  <Image
                    src="/QR.jpg"
                    alt="Donation QR Code"
                    width={240}
                    height={240}
                    className="mx-auto p-4"
                  />
                </div>
              </div>

              <p className="text-sm text-gray-500">Scan with any UPI app (Google Pay, PhonePe, Paytm, etc.)</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-left mb-8">
              <h4 className="font-bold text-gray-900 mb-4">Bank Transfer Details</h4>
              <div className="space-y-3">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Account Name</span>
                  <span className="font-medium text-gray-900">Raghunandan Gaushala Seva Trust</span>
                </div>
                <div className="h-px bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Account Number</span>
                  <span className="font-medium text-gray-900">1234567890123456</span>
                </div>
                <div className="h-px bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">IFSC Code</span>
                  <span className="font-medium text-gray-900">ABCD0123456</span>
                </div>
                <div className="h-px bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Bank & Branch</span>
                  <span className="font-medium text-gray-900">State Bank of India, Main Branch</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white py-6 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all group"
                size="lg"
              >
                <span>Donate Online</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-sm text-gray-500">
                For large donations or corporate sponsorships, please contact us directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

