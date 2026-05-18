'use client'

import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProcessSection from '../components/ProcessSection'
import PlusSection from '../components/PlusSection'
import ContactSection from '../components/ContactSection'
import Navigation from '../components/Navigation'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Navigation />
      <FloatingWhatsApp />

      <main>
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <PlusSection />
        <ContactSection />
      </main>

      {/* Footer simple */}
      <footer className="bg-[#F5EFE0] border-t border-[#C67B3A]/10">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <span className="font-display text-2xl text-[#2D1F14]">Kayen</span>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-[#9C5A22]">Helados artesanales · B2B</span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#2D1F14]/60">
              <a href="#quienes-somos" className="hover:text-[#2D1F14] transition-smooth">Quiénes somos</a>
              <a href="#proceso" className="hover:text-[#2D1F14] transition-smooth">Proceso</a>
              <a href="#plus" className="hover:text-[#2D1F14] transition-smooth">Ventajas</a>
              <a href="#contacto" className="hover:text-[#2D1F14] transition-smooth">Contacto</a>
            </div>

            {/* Redes */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2D1F14]/15 text-[#2D1F14] hover:bg-[#2D1F14] hover:text-[#F5EFE0] transition-smooth"
              >
                <InstagramLogo size={18} weight="fill" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2D1F14]/15 text-[#2D1F14] hover:bg-[#2D1F14] hover:text-[#F5EFE0] transition-smooth"
              >
                <WhatsappLogo size={18} weight="fill" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#C67B3A]/10 text-center text-xs text-[#2D1F14]/40">
            <p>© 2025 Kayen. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
