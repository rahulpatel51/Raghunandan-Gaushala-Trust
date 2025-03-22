"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=500&auto=format&fit=crop",
      alt: "Cow in green field",
    },
    {
      src: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=500&auto=format&fit=crop",
      alt: "Cows grazing",
    },
    {
      src: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=500&auto=format&fit=crop",
      alt: "Cow close-up",
    },
    {
      src: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=500&auto=format&fit=crop",
      alt: "Calf in field",
    },
    {
      src: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=500&auto=format&fit=crop",
      alt: "Cow drinking water",
    },
    {
      src: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=500&auto=format&fit=crop",
      alt: "Cows in shelter",
    },
    {
      src: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=500&auto=format&fit=crop",
      alt: "Cow in sunset",
    },
    {
      src: "https://images.unsplash.com/photo-1599827552599-eadf5fb3c75f?q=80&w=500&auto=format&fit=crop",
      alt: "Cow and caretaker",
    },     
  ]

  return (
    <section id="gallery" ref={ref} className="py-20 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 mb-4 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
            Our Sanctuary
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Take a visual journey through our gaushala and witness the happy lives of our rescued cows.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={500}
                height={500}
                className="w-full h-auto object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={1000}
                height={1000}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white text-center rounded-b-lg">
                <p className="font-medium">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

