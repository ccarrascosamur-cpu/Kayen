'use client'

import { motion } from 'framer-motion'
import { ArrowRight, WhatsappLogo } from '@phosphor-icons/react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="top" className="relative bg-[#2D1F14] overflow-hidden">
      {/* Imagen de fondo tipo referencia */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1200&q=75&auto=format&fit=crop"
          alt="Helado artesanal Kayen"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D1F14] via-[#2D1F14]/80 to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 lg:py-32">
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
            className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#F5EFE0]"
          >
            Helados artesanales para cafeterías y hoteles.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-[#F5EFE0]/70 max-w-lg"
          >
            Sabor artesanal para tu negocio. Sostenible, elevado y texturizado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <a href="#contacto" className="btn-primary">
              Ver catálogo
              <ArrowRight size={16} weight="bold" />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-[#F5EFE0]/30 text-[#F5EFE0] hover:bg-[#F5EFE0] hover:text-[#2D1F14]"
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
