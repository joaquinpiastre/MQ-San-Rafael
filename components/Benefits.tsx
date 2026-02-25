'use client'

import { motion } from 'framer-motion'

interface Benefit {
  icon: string
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    icon: '🌍',
    title: 'Importación Directa',
    description: 'Trabajamos directamente con fabricantes, eliminando intermediarios.',
  },
  {
    icon: '✓',
    title: 'Calidad Garantizada',
    description: 'Productos seleccionados con estándares internacionales de calidad.',
  },
  {
    icon: '🛡️',
    title: 'Garantía en Todos los Productos',
    description: 'Ofrecemos garantía completa en todos nuestros productos, respaldando la calidad y durabilidad de cada artículo.',
  },
  {
    icon: '✨',
    title: 'Diseño Moderno',
    description: 'Líneas contemporáneas y acabados premium para espacios únicos.',
  },
  {
    icon: '💬',
    title: 'Atención Personalizada',
    description: 'Asesoramiento especializado para cada proyecto y necesidad.',
  },
]

export default function Benefits() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-mq-black mb-4">
            ¿Por qué elegir MQ?
          </h2>
          <p className="text-xl text-mq-gray max-w-2xl mx-auto font-light">
            Ventajas que nos distinguen en el mercado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-mq-light-gray rounded-2xl flex items-center justify-center text-4xl group-hover:bg-mq-accent-soft/20 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-mq-black mb-3">
                {benefit.title}
              </h3>
              <p className="text-mq-gray font-light leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


