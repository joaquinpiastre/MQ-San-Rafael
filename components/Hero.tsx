'use client'

import { motion } from 'framer-motion'

const categories = ['Griferías', 'Sanitarios', 'Espejos', 'Bañeras', 'Vanitorys', 'Accesorios']

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-mq-light-gray to-white overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-mq-accent-soft/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-mq-accent-soft/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-mq-black mb-6 leading-tight"
          >
            Diseño, Calidad
            <br />
            <span className="text-mq-accent">y Eficiencia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-mq-gray mb-6 max-w-3xl mx-auto font-light"
          >
            Griferías, sanitarios y equipamiento de baño con estética moderna y estándares de calidad confiables.
          </motion.p>

          {/* Category pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat, i) => (
              <span
                key={i}
                className="text-sm font-medium text-mq-gray bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm"
              >
                {cat}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#productos"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-mq-black text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-mq-dark transition-all duration-300 shadow-lg"
            >
              Ver catálogo
            </motion.a>
            <motion.a
              href="https://wa.me/5492236235505"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-mq-black border border-gray-200 px-10 py-4 rounded-full text-lg font-medium hover:border-gray-400 transition-all duration-300 shadow-sm"
            >
              Cotizar ahora
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-mq-gray rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-mq-gray rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
