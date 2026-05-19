'use client'

import { motion } from 'framer-motion'
import { Thermometer, Truck, Clock, ShieldCheck, Package, Headphones } from '@phosphor-icons/react'

const plusItems = [
  {
    icon: Thermometer,
    title: 'Cadena de frío garantizada',
    desc: 'Cámaras de frío propias y vehículos equipados mantienen el producto en temperatura óptima.',
  },
  {
    icon: Truck,
    title: 'Distribución propia',
    desc: 'No dependemos de terceros. Nuestros vehículos llegan a su negocio con puntualidad.',
  },
  {
    icon: Clock,
    title: 'Respuesta rápida',
    desc: 'Atención comercial ágil. Resolvemos tus pedidos y consultas en tiempo récord.',
  },
  {
    icon: ShieldCheck,
    title: 'Calidad certificada',
    desc: 'Cumplimos con todos los estándares de inocuidad alimentaria y buenas prácticas.',
  },
  {
    icon: Package,
    title: 'Formatos flexibles',
    desc: 'Disponibles en distintos formatos y volúmenes según las necesidades de su negocio.',
  },
  {
    icon: Headphones,
    title: 'Acompañamiento comercial',
    desc: 'Te asesoramos en surtido, presentación y estrategia para vender más helado.',
  },
]

export default function PlusSection() {
  return (
    <section id="plus" className="px-4 py-20 md:py-24 bg-[#F5EFE0]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="section-label">Ventajas Kayen</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight text-[#2D1F14]">
            Lo que nos diferencia.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#2D1F14]/70">
            Más que un proveedor, somos un aliado para que su negocio crezca 
            con un producto que destaca.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {plusItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group rounded-2xl border border-[#C67B3A]/12 bg-white/50 p-6 hover:bg-white/80 transition-smooth"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C67B3A]/10 text-[#9C5A22]">
                    <Icon size={20} weight="fill" />
                  </div>
                  <h3 className="font-display text-lg text-[#2D1F14]">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#2D1F14]/65">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
