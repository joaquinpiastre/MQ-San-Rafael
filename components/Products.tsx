'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProductItem {
  code: string
  name: string
  material?: string
  finish?: string
  dimensions?: string
}

interface Category {
  id: string
  title: string
  subtitle: string
  icon: string
  color: string
  products: ProductItem[]
}

const categories: Category[] = [
  {
    id: 'griferia-cocina',
    title: 'Grifería de Cocina',
    subtitle: 'Colección 2026',
    icon: '🍳',
    color: 'from-slate-100 to-gray-50',
    products: [
      { code: 'CJM-SS18051', name: 'Monocomando Alto p/ Mesada', material: 'Bronce', finish: 'Cromo Satinado' },
      { code: 'CJM-SS20003', name: 'Monocomando Alto p/ Mesada', material: 'Bronce', finish: 'Cromo Satinado' },
      { code: 'CJM-SS820107C', name: 'Monocomando Alto c/ Rociador Extensible', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'MB00285', name: 'Monocomando Alto c/ Rociador Extensible', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM6001Z-5', name: 'Monocomando p/ Mesada', material: 'Bronce', finish: 'Cromo Pulido' },
    ],
  },
  {
    id: 'griferia-bano',
    title: 'Grifería de Baño',
    subtitle: 'Múltiples líneas',
    icon: '🚿',
    color: 'from-blue-50 to-slate-50',
    products: [
      { code: 'CJM183052-1', name: 'Juego de Ducha – Línea CJM183052', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM183052-3A', name: 'Juego de Lavatorio – Línea CJM183052', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM183052-4', name: 'Juego de Bidet – Línea CJM183052', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM183057-1', name: 'Juego de Ducha c/ Llaves Cerámica Blanca', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM183057-3', name: 'Juego de Lavatorio c/ Llaves Cerámica Blanca', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM183057-4', name: 'Juego de Bidet c/ Llaves Cerámica Blanca', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM183055-3', name: 'Juego de Pared p/ Lavatorio – Línea CJM183055', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM183055-3A', name: 'Juego de Mesada p/ Lavatorio – Línea CJM183055', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM183055-4', name: 'Juego de Bidet – Línea CJM183055', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM202501-1', name: 'Monocomando Pared p/ Ducha-Bañera', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM202501-3A', name: 'Monocomando Alto p/ Lavatorio', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM202501-4', name: 'Monocomando de Bidet', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM6021-1', name: 'Monocomando de Pared p/ Ducha-Bañera', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM6021-3B', name: 'Monocomando Alto p/ Lavatorio', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM6021-4A', name: 'Monocomando de Bidet', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM6010-1', name: 'Monocomando Pared p/ Ducha-Bañera', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM6010-3', name: 'Monocomando p/ Lavatorio', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM6010-4A', name: 'Monocomando de Bidet', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJMA0201', name: 'Monocomando con Sensor p/ Lavatorio', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJMS17', name: 'Válvula de Descarga p/ Mingitorio', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJP-D003', name: 'Sifón Desagüe p/ Lavatorio', material: 'Bronce', finish: 'Cromo Pulido' },
    ],
  },
  {
    id: 'duchas-accesorios',
    title: 'Accesorios de Ducha',
    subtitle: 'Flores, brazos y duchas higiénicas',
    icon: '🚿',
    color: 'from-cyan-50 to-blue-50',
    products: [
      { code: 'CJM-SS80118', name: 'Grifería de Pie p/ Bañera con Ducha de Mano', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJM20010', name: 'Grifería de Pie p/ Bañera con Ducha de Mano', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJS22015', name: 'Ducha Higiénica', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'CJS31539', name: 'Flor de Ducha Circular 20 cm', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'TMR2001', name: 'Flor de Ducha Circular 25 cm', material: 'Bronce', finish: 'Cromo Pulido' },
      { code: 'S10', name: 'Brazo de Ducha', material: 'Bronce', finish: 'Cromo Pulido' },
    ],
  },
  {
    id: 'desagues',
    title: 'Desagüe',
    subtitle: 'Rejillas y canaletas',
    icon: '🔲',
    color: 'from-gray-50 to-slate-100',
    products: [
      { code: 'CJSD-9007', name: 'Rejilla de Piso Cuadrada 15×15 cm', material: 'Acero Inoxidable', finish: 'Cromo Pulido' },
      { code: 'CJSD-9008', name: 'Rejilla de Piso Cuadrada 15×15 cm (Tapa Lisa)', material: 'Acero Inoxidable', finish: 'Cromo Satinado' },
      { code: 'CJSD-2305', name: 'Canaleta / Rejilla Lineal 10×40 cm', material: 'Acero Inoxidable', finish: 'Cromo Pulido' },
    ],
  },
  {
    id: 'bañeras-cabinas',
    title: 'Bañeras & Cabinas de Ducha',
    subtitle: 'Colección 2026',
    icon: '🛁',
    color: 'from-indigo-50 to-purple-50',
    products: [
      { code: 'CJBT-T345', name: 'Bañera Exenta', material: 'Acrílico Termoformado Blanco', dimensions: '1800×750×760 mm' },
      { code: 'CJBT-T342', name: 'Bañera Exenta', material: 'Acrílico Termoformado Blanco', dimensions: '1400×700×560 mm' },
      { code: 'CJSR-Y550', name: 'Cabina de Ducha c/ Asiento', material: 'Vidrio Templado', finish: 'Cromo Pulido', dimensions: '900×900×1950 mm' },
      { code: 'CJSR-YL804', name: 'Cabina de Ducha c/ Estante', material: 'Vidrio Templado', finish: 'Cromo Pulido', dimensions: '900×900×1950 mm' },
    ],
  },
  {
    id: 'accesorios-bano',
    title: 'Accesorios de Baño',
    subtitle: 'Colección 2026',
    icon: '🪥',
    color: 'from-emerald-50 to-teal-50',
    products: [
      { code: 'CJBA0178Z', name: 'Juego de Accesorios 6 Piezas (toallero, porta rollo, aro, jabonera, porta vaso, percha)', material: 'Zinc', finish: 'Cromo Pulido' },
      { code: 'CJBA0037Z', name: 'Juego de Accesorios 6 Piezas (toallero, porta rollo, aro, jabonera, porta vaso, percha)', material: 'Zinc', finish: 'Cromo Pulido' },
      { code: 'CJBA0001Z', name: 'Juego de Accesorios 6 Piezas estilo clásico', material: 'Zinc', finish: 'Cromo Pulido' },
      { code: 'CJM-SS18007C', name: 'Grifo para Purificador de Agua', material: 'Zinc', finish: 'Cromo Satinado' },
    ],
  },
  {
    id: 'espejos',
    title: 'Espejos',
    subtitle: 'Colección 2026',
    icon: '🪞',
    color: 'from-amber-50 to-yellow-50',
    products: [
      { code: 'CJMR-L317', name: 'Espejo Oval con Luz LED', finish: 'Luz LED + Marco Negro', dimensions: '90×50 cm' },
      { code: 'CJMR-L320', name: 'Espejo con Marco Decorativo', finish: 'Luz LED + Marco Dorado', dimensions: '80×60 cm' },
      { code: 'CJMR-H194', name: 'Espejo LED 5 mm con Interruptor Táctil', dimensions: '90×60 cm' },
      { code: 'CJMR-H5076', name: 'Espejo LED 5 mm con Interruptor Táctil', dimensions: '80×60 cm' },
      { code: 'CJMR-H5109', name: 'Espejo LED 5 mm con Interruptor Táctil', dimensions: '80×60 cm' },
      { code: 'CJMR-H5111', name: 'Espejo LED Touch 5 mm', finish: 'Luz LED + Interruptor Táctil', dimensions: '50×70 cm' },
      { code: 'CJMR-231', name: 'Espejo con Repisa Dorado 4 mm', finish: 'Borde Pulido', dimensions: '70×50 cm' },
      { code: 'CJMR-321', name: 'Espejo Redondo 4 mm', finish: 'Borde Pulido', dimensions: '60×60 cm' },
    ],
  },
  {
    id: 'sanitarios',
    title: 'Sanitarios',
    subtitle: 'Colección 2026',
    icon: '🚽',
    color: 'from-rose-50 to-pink-50',
    products: [
      { code: 'F8203B', name: 'Juego de Baño 4 Piezas – Línea F8203B (inodoro largo, tapa PP cierre suave, mochila apoyar, bidet 1AG-3AG)', dimensions: 'Inodoro: 68×84 cm' },
      { code: 'CH2251', name: 'Juego de Baño 4 Piezas – Línea CH2251 (inodoro largo, tapa PP cierre suave, mochila apoyar, bidet 1AG-3AG)', dimensions: 'Inodoro: 67×81 cm' },
      { code: '015', name: 'Juego de Baño 4 Piezas – Línea 015 (inodoro largo, tapa PP cierre suave, mochila apoyar, bidet 1AG-3AG)', dimensions: 'Inodoro: 63×75 cm' },
      { code: 'MINGITORIO', name: 'Mingitorio c/ Grifería (urinario de pared, grifería incluida, blanco brillante)', dimensions: '33×29×64 cm' },
    ],
  },
  {
    id: 'bachas-vanitorys',
    title: 'Bachas & Vanitorys',
    subtitle: 'Colección 2026',
    icon: '🪣',
    color: 'from-orange-50 to-amber-50',
    products: [
      { code: '229A', name: 'Bacha 480×370×130 mm', material: 'Loza', finish: 'Blanco' },
      { code: '229D', name: 'Bacha 480×370×130 mm', material: 'Loza', finish: 'Blanco' },
      { code: '251C', name: 'Bacha Redonda 460×460×155 mm', material: 'Loza', finish: 'Blanco' },
      { code: '420', name: 'Bacha Redonda 480×350×145 mm', material: 'Loza', finish: 'Blanco' },
      { code: 'TD6040-60B', name: 'Vanitoy Mueble + Espejo (aluminio, mueble 600×460 mm, espejo 600×400 mm)', material: 'Aluminio' },
      { code: 'TD6042-60B', name: 'Vanitoy Mueble + Espejo (aluminio, mueble 600×460 mm, espejo 600×400 mm)', material: 'Aluminio' },
      { code: 'K04-60', name: 'Vanitoy Mueble + Espejo c/ Repisas – 60 cm', material: 'Aluminio', dimensions: 'Mueble: 610×475×500 mm' },
      { code: 'K04-80', name: 'Vanitoy Mueble + Espejo c/ Repisas – 80 cm', material: 'Aluminio', dimensions: 'Mueble: 810×475×500 mm' },
      { code: 'G2960', name: 'Vanitoy Mueble + Espejo Gris Oscuro', material: 'Aluminio', dimensions: 'Mueble: 610×410×440 mm' },
      { code: 'G2960SB', name: 'Vanitoy Mueble + Espejo c/ Mesada de Piedra', material: 'Aluminio', dimensions: 'Mueble: 600×475×440 mm' },
      { code: 'B8060SB', name: 'Vanitoy Mueble + Espejo Bicolor c/ Mesada Negra', material: 'Aluminio', dimensions: 'Mueble: 600×475×490 mm' },
    ],
  },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const toggle = (id: string) => {
    setActiveCategory(prev => prev === id ? null : id)
  }

  return (
    <section id="productos" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-mq-black mb-4">
            Catálogo de Productos
          </h2>
          <p className="text-xl text-mq-gray max-w-2xl mx-auto font-light">
            Griferías, sanitarios, espejos y bañeras. Colección 2026 con precios c/ IVA incluido.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Category header */}
              <button
                onClick={() => toggle(cat.id)}
                className={`w-full text-left p-6 bg-gradient-to-br ${cat.color} flex items-center justify-between gap-4 group`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{cat.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-mq-black group-hover:text-mq-accent transition-colors duration-200">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-mq-gray font-light">{cat.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs font-medium text-mq-accent bg-white/80 rounded-full px-2 py-0.5">
                    {cat.products.length} productos
                  </span>
                  <motion.span
                    animate={{ rotate: activeCategory === cat.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-mq-gray text-lg"
                  >
                    ↓
                  </motion.span>
                </div>
              </button>

              {/* Product list */}
              <AnimatePresence>
                {activeCategory === cat.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="divide-y divide-gray-50">
                      {cat.products.map((product, i) => (
                        <div key={i} className="px-6 py-3 hover:bg-gray-50 transition-colors duration-150">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-mq-black leading-snug">
                                {product.name}
                              </p>
                              <div className="flex flex-wrap gap-x-3 mt-1">
                                {product.material && (
                                  <span className="text-xs text-mq-gray">{product.material}</span>
                                )}
                                {product.finish && (
                                  <span className="text-xs text-mq-gray">{product.finish}</span>
                                )}
                                {product.dimensions && (
                                  <span className="text-xs text-mq-gray">{product.dimensions}</span>
                                )}
                              </div>
                            </div>
                            <span className="text-xs font-mono text-mq-accent bg-red-50 rounded px-1.5 py-0.5 flex-shrink-0">
                              {product.code}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      <a
                        href="https://wa.me/5492236235505"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-mq-accent hover:underline"
                      >
                        Consultar precios por WhatsApp →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-mq-gray mt-10 font-light"
        >
          Todos los precios incluyen IVA · Consultá disponibilidad de stock
        </motion.p>
      </div>
    </section>
  )
}
