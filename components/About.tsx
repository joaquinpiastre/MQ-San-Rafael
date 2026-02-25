'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-24 md:py-32 bg-mq-light-gray"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-mq-black mb-6">
              Sobre MQ
            </h2>
            <div className="w-24 h-1 bg-mq-accent mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm"
          >
            <p className="text-lg md:text-xl text-mq-gray leading-relaxed font-light text-center">
              MQ es una empresa dedicada a la{' '}
              <span className="font-semibold text-mq-black">importación directa</span>, ofreciendo productos seleccionados con{' '}
              <span className="font-semibold text-mq-black">estándares internacionales de calidad</span>.
            </p>
            <p className="text-lg md:text-xl text-mq-gray leading-relaxed font-light text-center mt-6">
              Nos especializamos en grifería y sanitarios metálicos, trabajando directamente con fabricantes para garantizar excelencia en cada producto.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


