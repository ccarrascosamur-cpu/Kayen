'use client'

import { motion } from 'framer-motion'
import { ArrowRight, WhatsappLogo } from '@phosphor-icons/react'

export default function HeroSection() {
  return (
    <section id="top" className="relative bg-[#2D1F14] overflow-hidden min-h-[90vh] flex items-center">
      {/* Video de fondo */}
      <div className="absolute inset-0">
        <video
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D1F14]/95 via-[#2D1F14]/85 to-[#2D1F14]/60" />
        <div className="absolute inset-0 bg-[#2D1F14]/30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-28 lg:py-32 w-full">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-label text-[#C67B3A]"
          >
            Helados artesanales para tu negocio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#F5EFE0] drop-shadow-lg"
          >
            Helados artesanales para cafeterías y hoteles.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-[#F5EFE0]/90 max-w-lg drop-shadow-md"
          >
            Sabor artesanal para tu negocio. Sostenible, elevado y texturizado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-[#F5EFE0] px-6 py-3.5 text-sm font-semibold text-[#2D1F14] hover:bg-[#E8D5B5] transition-smooth shadow-lg"
            >
              Ver catálogo
              <ArrowRight size={16} weight="bold" />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#F5EFE0] px-6 py-3.5 text-sm font-semibold text-[#F5EFE0] hover:bg-[#F5EFE0] hover:text-[#2D1F14] transition-smooth"
            >
              Solicitar asesoría
              <WhatsappLogo size={16} weight="fill" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
