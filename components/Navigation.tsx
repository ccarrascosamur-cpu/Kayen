'use client'

import { useState } from 'react'
import { List, X } from '@phosphor-icons/react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Inicio', href: '#top' },
    { label: 'Quiénes somos', href: '#quienes-somos' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Plus', href: '#plus' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-[#2D1F14]">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <img
            src="/logo-kayen.png"
            alt="Kayen"
            className="h-16 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#F5EFE0]/70 hover:text-[#F5EFE0] transition-smooth"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full bg-[#F5EFE0] px-5 py-2 text-sm font-semibold text-[#2D1F14] hover:bg-[#E8D5B5] transition-smooth"
          >
            Cotizar ahora
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#F5EFE0]"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#F5EFE0]/10 bg-[#2D1F14]">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm text-[#F5EFE0]/70 hover:text-[#F5EFE0] transition-smooth"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center rounded-full bg-[#F5EFE0] px-4 py-3 text-sm font-semibold text-[#2D1F14]"
            >
              Cotizar ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
