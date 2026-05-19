'use client'

import { motion } from 'framer-motion'
import { Factory, Snowflake, Truck, CheckCircle } from '@phosphor-icons/react'

const steps = [
  {
    icon: Factory,
    step: '01',
    title: 'Elaboración en nuestra fábrica',
    desc: 'Producimos cada helado artesanalmente en nuestra planta propia, siguiendo recetas tradicionales con ingredientes seleccionados.',
  },
  {
    icon: Snowflake,
    step: '02',
    title: 'Almacenaje en cámaras de frío',
    desc: 'Conservamos el producto en cámaras frigoríficas de última generación que garantizan la cadena de frío perfecta.',
  },
  {
    icon: Truck,
    step: '03',
    title: 'Despacho con vehículos equipados',
    desc: 'Transportamos con vehículos altamente equipados para mantener el producto en óptimas condiciones hasta su negocio.',
  },
]

export default function ProcessSection() {
  return (
    <section id="proceso" className="px-4 py-20 md:py-24 bg-[#E8D5B5]/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="section-label">Nuestro proceso</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight text-[#2D1F14]">
            De nuestra fábrica a su negocio.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#2D1F14]/70">
            Un proceso cuidadosamente diseñado para que recibas el mejor producto, 
            en las mejores condiciones, siempre.
          </p>
        </motion.div>

        {/* Organigrama / Timeline */}
        <div className="mt-14 relative">
          {/* Línea conectora desktop */}
          <div className="hidden lg:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-[#C67B3A]/25" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Número + Icono */}
                  <div className="flex flex-col items-center">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#2D1F14] text-[#F5EFE0] shadow-lg">
                      <Icon size={28} weight="fill" />
                    </div>
                    <span className="mt-3 text-xs font-bold tracking-[0.2em] text-[#9C5A22]">
                      PASO {item.step}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="mt-5 text-center rounded-2xl border border-[#C67B3A]/15 bg-white/60 p-6">
                    <h3 className="font-display text-xl text-[#2D1F14]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#2D1F14]/65">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Garantía */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-[#2D1F14]/60"
        >
          <CheckCircle size={18} weight="fill" className="text-[#C67B3A]" />
          <span>Garantizamos la cadena de frío en todo momento</span>
        </motion.div>
      </div>
    </section>
  )
}
