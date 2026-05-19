'use client'

import { motion } from 'framer-motion'
import { Play, Image as ImageIcon } from '@phosphor-icons/react'

const mediaItems = [
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=75&auto=format&fit=crop',
    title: 'Helados premium',
    desc: 'Calidad artesanal en cada cucharada.',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&q=75&auto=format&fit=crop',
    title: 'Ingredientes naturales',
    desc: 'Seleccionamos lo mejor de la naturaleza.',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=800&q=75&auto=format&fit=crop',
    title: 'Proceso artesanal',
    desc: 'Elaborado con dedicación y precisión.',
  },
  {
    type: 'image',
    src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=75&auto=format&fit=crop',
    title: 'Presentación elegante',
    desc: 'Diseñado para destacar en tu negocio.',
  },
]

export default function MediaSection() {
  return (
    <section id="galeria" className="px-4 py-20 md:py-24 bg-[#F5EFE0]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="section-label">Galería</span>
          <h2 className="mt-4 font-display text-3xl md:text-4xl leading-tight text-[#2D1F14]">
            Nuestro universo Kayen.
          </h2>
          <p className="mt-4 text-base leading-7 text-[#2D1F14]/70">
            Imágenes y videos que muestran quiénes somos y cómo trabajamos.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-[#C67B3A]/12 bg-white shadow-sm hover:shadow-md transition-smooth"
            >
              {/* Contenedor multimedia */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#2D1F14]/5">
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                  />
                )}
                {/* Overlay sutil al hover */}
                <div className="absolute inset-0 bg-[#2D1F14]/0 group-hover:bg-[#2D1F14]/20 transition-colors duration-300" />
                {/* Icono indicador */}
                <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#2D1F14]/60 text-[#F5EFE0] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.type === 'image' ? <ImageIcon size={14} weight="fill" /> : <Play size={14} weight="fill" />}
                </div>
              </div>

              {/* Texto */}
              <div className="p-5">
                <h3 className="font-display text-lg text-[#2D1F14]">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#2D1F14]/60">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Box grande para video destacado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 rounded-2xl border border-[#C67B3A]/12 bg-white shadow-sm overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-video md:aspect-auto overflow-hidden bg-[#2D1F14]/5">
              <img
                src="https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=800&q=75&auto=format&fit=crop"
                alt="Video destacado"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5EFE0]/90 text-[#2D1F14] shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <Play size={24} weight="fill" />
                </div>
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="section-label">Destacado</span>
              <h3 className="mt-3 font-display text-2xl text-[#2D1F14]">Conocé nuestra fábrica</h3>
              <p className="mt-3 text-base leading-7 text-[#2D1F14]/70">
                Un recorrido por nuestra planta de producción donde cada helado nace con dedicación 
                y los más altos estándares de calidad.
              </p>
              <p className="mt-4 text-sm text-[#2D1F14]/50">
                Reemplazá esta imagen por un video de YouTube o un archivo .mp4.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
