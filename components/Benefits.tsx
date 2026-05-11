'use client'

import { motion } from 'framer-motion'

const benefits = [
  {
    icon: '🏭',
    title: 'Directo de Fábrica',
    description: 'Trabajamos directo con fabricantes, sin intermediarios, para ofrecerte el mejor precio y calidad.',
  },
  {
    icon: '✓',
    title: 'Calidad Garantizada',
    description: 'Productos seleccionados con estándares internacionales. Material bronce, acero inoxidable y loza de primera.',
  },
  {
    icon: '🎨',
    title: 'Diseño Contemporáneo',
    description: 'Estética moderna y adaptable a distintos estilos de proyecto. Cromo pulido, satinado y acabados premium.',
  },
  {
    icon: '📦',
    title: 'Amplio Catálogo',
    description: 'Griferías, sanitarios, espejos LED, bañeras exentas, cabinas de ducha, vanitorys y accesorios.',
  },
  {
    icon: '💬',
    title: 'Atención Personalizada',
    description: 'Asesoramiento especializado para cada proyecto. Consultanos por WhatsApp o email.',
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
            Una marca sólida enfocada en productos confiables y bien desarrollados.
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
              <div className="w-20 h-20 mx-auto mb-6 bg-mq-light-gray rounded-2xl flex items-center justify-center text-4xl transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-mq-black mb-3">
                {benefit.title}
              </h3>
              <p className="text-mq-gray font-light leading-relaxed text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
