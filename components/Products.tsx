'use client'

import { motion } from 'framer-motion'

interface Product {
  id: number
  name: string
  description: string
  category: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Grifería Monocomando Premium',
    description: 'Diseño minimalista con acabado cromado brillante. Tecnología cerámica de última generación.',
    category: 'Grifería',
  },
  {
    id: 2,
    name: 'Ducha Termostática Elite',
    description: 'Control de temperatura preciso y acabado cromado satinado. Ideal para espacios modernos.',
    category: 'Duchas',
  },
  {
    id: 3,
    name: 'Lavabo Monocomando Moderno',
    description: 'Líneas limpias y acabado cromado espejo. Perfecto para baños contemporáneos.',
    category: 'Grifería',
  },
  {
    id: 4,
    name: 'Kit Cocina Premium',
    description: 'Grifería de cocina con tecnología pull-out. Acabado cromado resistente a manchas.',
    category: 'Cocina',
  },
  {
    id: 5,
    name: 'Accesorios Cromados Serie Pro',
    description: 'Porta toallas, jaboneras y accesorios en acabado cromado de alta calidad.',
    category: 'Accesorios',
  },
  {
    id: 6,
    name: 'Ducha Lluvia Cromada',
    description: 'Plato de ducha con sistema de lluvia. Acabado cromado premium y diseño elegante.',
    category: 'Duchas',
  },
]

export default function Products() {
  return (
    <section
      id="productos"
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-mq-black mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-mq-gray max-w-2xl mx-auto font-light">
            Selección premium de grifería y sanitarios metálicos con acabado cromado de calidad internacional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 group cursor-pointer"
            >
              {/* Product icon/placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-mq-light-gray to-gray-100 rounded-xl mb-6 flex items-center justify-center group-hover:from-mq-accent-soft/20 group-hover:to-mq-accent-soft/10 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
              </div>

              <div className="mb-2">
                <span className="text-xs text-mq-accent font-medium uppercase tracking-wide">
                  {product.category}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-mq-black mb-3 group-hover:text-mq-accent transition-colors duration-300">
                {product.name}
              </h3>

              <p className="text-mq-gray text-sm leading-relaxed font-light">
                {product.description}
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="text-xs text-mq-gray font-medium">
                  Superficie cromada • Calidad garantizada
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


