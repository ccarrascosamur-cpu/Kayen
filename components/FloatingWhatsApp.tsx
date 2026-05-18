'use client'

import { motion } from 'framer-motion'
import { WhatsappLogo } from '@phosphor-icons/react'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      whileHover={{ scale: 1.06, y: -4 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full border border-dulce/15 bg-dulce text-crema shadow-premium transition-smooth hover:bg-dulce-deep"
      aria-label="Abrir WhatsApp"
    >
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <WhatsappLogo size={28} weight="fill" />
      </motion.div>

      <motion.div
        animate={{ scale: [1, 1.55], opacity: [0.38, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
        className="absolute inset-0 rounded-full border border-dulce/35"
      />
    </motion.a>
  )
}
