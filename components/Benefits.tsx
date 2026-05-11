'use client'

import { motion } from 'framer-motion'

const benefits = [
  {
    title: 'Directo de Fábrica',
    description: 'Trabajamos directo con fabricantes, sin intermediarios, para ofrecerte el mejor precio y calidad.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
        <rect x="9" y="9" width="2" height="2" />
        <rect x="13" y="9" width="2" height="2" />
      </svg>
    ),
  },
  {
    title: 'Calidad Garantizada',
    description: 'Productos seleccionados con estándares internacionales. Bronce, acero inoxidable y loza de primera.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 3l2.09 6.26H21l-5.47 3.97 2.09 6.26L12 15.52l-5.62 3.97 2.09-6.26L3 9.26h6.91L12 3z" />
      </svg>
    ),
  },
  {
    title: 'Diseño Contemporáneo',
    description: 'Estética moderna y adaptable a distintos estilos de proyecto. Acabados cromo pulido y satinado.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2l3.5 7 7.5 1-5.5 5.3 1.3 7.7L12 19.5 5.2 23l1.3-7.7L1 10l7.5-1L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Amplio Catálogo',
    description: 'Griferías, sanitarios, espejos LED, bañeras exentas, cabinas de ducha, vanitorys y accesorios.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Atención Personalizada',
    description: 'Asesoramiento especializado para cada proyecto. Consultanos por WhatsApp o email.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
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
              <div className="w-16 h-16 mx-auto mb-6 border border-gray-200 rounded-2xl flex items-center justify-center text-mq-black transition-all duration-300 hover:border-mq-accent hover:text-mq-accent">
                {benefit.icon}
              </div>
              <h3 className="text-base font-semibold text-mq-black mb-2">
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
