'use client'

import { motion } from 'framer-motion'
import { Factory, Leaf, Heart, Star } from '@phosphor-icons/react'

const values = [
  {
    icon: Factory,
    title: 'Fábrica propia',
    desc: 'Elaboramos nuestros helados en nuestra propia planta con control total de calidad.',
  },
  {
    icon: Leaf,
    title: 'Ingredientes naturales',
    desc: 'Usamos ingredientes de primera calidad, sin conservantes artificiales.',
  },
  {
    icon: Heart,
    title: 'Hecho con dedicación',
    desc: 'Cada sabor es desarrollado artesanalmente con atención al detalle.',
  },
  {
    icon: Star,
    title: 'Experiencia comprobada',
    desc: 'Años abasteciendo negocios gastronómicos con productos de excelencia.',
  },
]

export default function AboutSection() {
  return (
    <section id="quienes-somos" className="px-4 py-20 md:py-24 bg-[#F5EFE0]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Quiénes somos</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight text-[#2D1F14]">
              Sabor artesanal para tu negocio.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#2D1F14]/70">
              Kayen es una heladería artesanal B2B que combina tradición y elegancia, 
              creando productos para la hospitalidad más exigente. Nos especializamos 
              en elaborar helados premium para cafeterías, hoteles, restaurantes y 
              negocios que buscan diferenciarse con un producto de calidad superior.
            </p>
            <p className="mt-4 text-base leading-7 text-[#2D1F14]/70">
              Nuestra misión es simple: llevar el auténtico sabor artesanal a cada 
              rincón, manteniendo siempre los más altos estándares de calidad y 
              un servicio personalizado para cada cliente.
            </p>
          </motion.div>

          {/* Valores grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl border border-[#C67B3A]/15 bg-white/50 p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2D1F14] text-[#F5EFE0]">
                    <Icon size={20} weight="fill" />
                  </div>
                  <h3 className="mt-4 font-display text-xl text-[#2D1F14]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#2D1F14]/65">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
