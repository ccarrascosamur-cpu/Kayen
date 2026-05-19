'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, CheckCircle, WhatsappLogo, Envelope, MapPin } from '@phosphor-icons/react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    mensaje: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hola, soy ${formData.nombre} de ${formData.empresa}.\nTel: ${formData.telefono}\nEmail: ${formData.email}\n\n${formData.mensaje}`
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ nombre: '', empresa: '', telefono: '', email: '', mensaje: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contacto" className="px-4 py-20 md:py-24 bg-[#2D1F14]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Info de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label text-[#C67B3A]">Contacto</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight text-[#F5EFE0]">
              Hablemos de su negocio.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#F5EFE0]/65">
              ¿Quiere ofrecer helados artesanales de calidad en su negocio?
              Escríbanos y le ayudamos a elegir el surtido ideal.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5EFE0]/10 text-[#F5EFE0] group-hover:bg-[#C67B3A] transition-smooth">
                  <WhatsappLogo size={22} weight="fill" />
                </div>
                <div>
                  <p className="text-sm text-[#F5EFE0]/50">WhatsApp</p>
                  <p className="text-[#F5EFE0]">Consultar por WhatsApp</p>
                </div>
              </a>

              <a href="mailto:hola@kayen.com" className="flex items-center gap-4 group">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5EFE0]/10 text-[#F5EFE0] group-hover:bg-[#C67B3A] transition-smooth">
                  <Envelope size={22} weight="fill" />
                </div>
                <div>
                  <p className="text-sm text-[#F5EFE0]/50">Email</p>
                  <p className="text-[#F5EFE0]">hola@kayen.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5EFE0]/10 text-[#F5EFE0]">
                  <MapPin size={22} weight="fill" />
                </div>
                <div>
                  <p className="text-sm text-[#F5EFE0]/50">Ubicación</p>
                  <p className="text-[#F5EFE0]">Consultar ubicación</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#F5EFE0]/10 bg-[#3a2a1e] p-6 md:p-8"
          >
            {submitted && (
              <div className="mb-5 flex items-center gap-3 rounded-xl border border-green-400/30 bg-green-400/10 px-4 py-3 text-sm text-green-300">
                <CheckCircle size={18} weight="fill" />
                <span>¡Mensaje enviado! Te contactaremos por WhatsApp.</span>
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#F5EFE0]/15 bg-[#2D1F14] px-4 py-3 text-sm text-[#F5EFE0] placeholder:text-[#F5EFE0]/40 outline-none focus:border-[#C67B3A] transition-smooth"
              />
              <input
                type="text"
                name="empresa"
                placeholder="Nombre del negocio"
                value={formData.empresa}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#F5EFE0]/15 bg-[#2D1F14] px-4 py-3 text-sm text-[#F5EFE0] placeholder:text-[#F5EFE0]/40 outline-none focus:border-[#C67B3A] transition-smooth"
              />
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono / WhatsApp"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#F5EFE0]/15 bg-[#2D1F14] px-4 py-3 text-sm text-[#F5EFE0] placeholder:text-[#F5EFE0]/40 outline-none focus:border-[#C67B3A] transition-smooth"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#F5EFE0]/15 bg-[#2D1F14] px-4 py-3 text-sm text-[#F5EFE0] placeholder:text-[#F5EFE0]/40 outline-none focus:border-[#C67B3A] transition-smooth"
              />
            </div>

            <textarea
              name="mensaje"
              placeholder="¿Qué necesitás? Contanos sobre tu negocio..."
              value={formData.mensaje}
              onChange={handleChange}
              rows={4}
              className="mt-4 w-full rounded-xl border border-[#F5EFE0]/15 bg-[#2D1F14] px-4 py-3 text-sm text-[#F5EFE0] placeholder:text-[#F5EFE0]/40 outline-none focus:border-[#C67B3A] transition-smooth resize-none"
            />

            <button
              type="submit"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#F5EFE0] px-6 py-3.5 text-sm font-semibold text-[#2D1F14] hover:bg-[#E8D5B5] transition-smooth"
            >
              Enviar por WhatsApp
              <ArrowRight size={16} weight="bold" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
