'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Product {
  code: string
  name: string
  material?: string
  finish?: string
  dimensions?: string
  category: string
  categoryId: string
}

const PRODUCTS: Product[] = [
  // Grifería de Cocina
  { code: 'CJM-SS18051',    name: 'Monocomando Alto p/ Mesada',                   material: 'Bronce', finish: 'Cromo Satinado', category: 'Grifería Cocina',     categoryId: 'cocina'     },
  { code: 'CJM-SS20003',    name: 'Monocomando Alto p/ Mesada',                   material: 'Bronce', finish: 'Cromo Satinado', category: 'Grifería Cocina',     categoryId: 'cocina'     },
  { code: 'CJM-SS820107C',  name: 'Monocomando Alto c/ Rociador Extensible',      material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Cocina',     categoryId: 'cocina'     },
  { code: 'MB00285',        name: 'Monocomando Alto c/ Rociador Extensible',      material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Cocina',     categoryId: 'cocina'     },
  { code: 'CJM6001Z-5',     name: 'Monocomando p/ Mesada',                        material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Cocina',     categoryId: 'cocina'     },
  // Grifería de Baño
  { code: 'CJM183052-1',   name: 'Juego de Ducha – Línea CJM183052',             material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJM183052-3A',  name: 'Juego de Lavatorio – Línea CJM183052',         material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJM183052-4',   name: 'Juego de Bidet – Línea CJM183052',             material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJM183057-1',   name: 'Juego de Ducha c/ Llaves Cerámica Blanca',     material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJM183057-3',   name: 'Juego de Lavatorio c/ Llaves Cerámica Blanca', material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJM183057-4',   name: 'Juego de Bidet c/ Llaves Cerámica Blanca',     material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJM183055-3',   name: 'Juego de Pared p/ Lavatorio',                  material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJM183055-3A',  name: 'Juego de Mesada p/ Lavatorio',                 material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJM183055-4',   name: 'Juego de Bidet – Línea CJM183055',             material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJM202501-1',   name: 'Monocomando Pared p/ Ducha-Bañera',            material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJM202501-3A',  name: 'Monocomando Alto p/ Lavatorio',                material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJM202501-4',   name: 'Monocomando de Bidet',                         material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJM6021-1',     name: 'Monocomando de Pared p/ Ducha-Bañera',         material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJM6021-3B',    name: 'Monocomando Alto p/ Lavatorio',                material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJM6021-4A',    name: 'Monocomando de Bidet',                         material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJM6010-1',     name: 'Monocomando Pared p/ Ducha-Bañera',            material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJM6010-3',     name: 'Monocomando p/ Lavatorio',                     material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJM6010-4A',    name: 'Monocomando de Bidet',                         material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJMA0201',      name: 'Monocomando con Sensor p/ Lavatorio',          material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJMS17',        name: 'Válvula de Descarga p/ Mingitorio',            material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  { code: 'CJP-D003',      name: 'Sifón Desagüe p/ Lavatorio',                  material: 'Bronce', finish: 'Cromo Pulido',   category: 'Grifería Baño',       categoryId: 'bano'       },
  // Accesorios de Ducha
  { code: 'CJM-SS80118',   name: 'Grifería de Pie p/ Bañera con Ducha de Mano', material: 'Bronce', finish: 'Cromo Pulido',   category: 'Accesorios Ducha',    categoryId: 'ducha'      },
  { code: 'CJM20010',      name: 'Grifería de Pie p/ Bañera con Ducha de Mano', material: 'Bronce', finish: 'Cromo Pulido',   category: 'Accesorios Ducha',    categoryId: 'ducha'      },
  { code: 'CJS22015',      name: 'Ducha Higiénica',                             material: 'Bronce', finish: 'Cromo Pulido',   category: 'Accesorios Ducha',    categoryId: 'ducha'      },
  { code: 'CJS31539',      name: 'Flor de Ducha Circular 20 cm',                material: 'Bronce', finish: 'Cromo Pulido',   category: 'Accesorios Ducha',    categoryId: 'ducha'      },
  { code: 'TMR2001',       name: 'Flor de Ducha Circular 25 cm',                material: 'Bronce', finish: 'Cromo Pulido',   category: 'Accesorios Ducha',    categoryId: 'ducha'      },
  { code: 'S10',           name: 'Brazo de Ducha',                              material: 'Bronce', finish: 'Cromo Pulido',   category: 'Accesorios Ducha',    categoryId: 'ducha'      },
  // Desagüe
  { code: 'CJSD-9007',     name: 'Rejilla de Piso Cuadrada 15×15 cm',           material: 'Acero Inoxidable', finish: 'Cromo Pulido',   dimensions: '15×15 cm', category: 'Desagüe', categoryId: 'desague' },
  { code: 'CJSD-9008',     name: 'Rejilla de Piso Cuadrada 15×15 cm (Tapa Lisa)', material: 'Acero Inoxidable', finish: 'Cromo Satinado', dimensions: '15×15 cm', category: 'Desagüe', categoryId: 'desague' },
  { code: 'CJSD-2305',     name: 'Canaleta / Rejilla Lineal',                   material: 'Acero Inoxidable', finish: 'Cromo Pulido',   dimensions: '10×40 cm', category: 'Desagüe', categoryId: 'desague' },
  // Bañeras & Cabinas de Ducha
  { code: 'CJBT-T345',     name: 'Bañera Exenta',                               material: 'Acrílico Termoformado', dimensions: '1800×750×760 mm', category: 'Bañeras & Cabinas', categoryId: 'baneras' },
  { code: 'CJBT-T342',     name: 'Bañera Exenta',                               material: 'Acrílico Termoformado', dimensions: '1400×700×560 mm', category: 'Bañeras & Cabinas', categoryId: 'baneras' },
  { code: 'CJSR-Y550',     name: 'Cabina de Ducha c/ Asiento',                  material: 'Vidrio Templado', finish: 'Cromo Pulido', dimensions: '900×900×1950 mm', category: 'Bañeras & Cabinas', categoryId: 'baneras' },
  { code: 'CJSR-YL804',    name: 'Cabina de Ducha c/ Estante',                  material: 'Vidrio Templado', finish: 'Cromo Pulido', dimensions: '900×900×1950 mm', category: 'Bañeras & Cabinas', categoryId: 'baneras' },
  // Accesorios de Baño
  { code: 'CJBA0178Z',     name: 'Juego Accesorios 6 Piezas',                   material: 'Zinc', finish: 'Cromo Pulido',   category: 'Accesorios Baño',     categoryId: 'accesorios' },
  { code: 'CJBA0037Z',     name: 'Juego Accesorios 6 Piezas',                   material: 'Zinc', finish: 'Cromo Pulido',   category: 'Accesorios Baño',     categoryId: 'accesorios' },
  { code: 'CJBA0001Z',     name: 'Juego Accesorios 6 Piezas – Estilo Clásico',  material: 'Zinc', finish: 'Cromo Pulido',   category: 'Accesorios Baño',     categoryId: 'accesorios' },
  { code: 'CJM-SS18007C',  name: 'Grifo para Purificador de Agua',              material: 'Zinc', finish: 'Cromo Satinado', category: 'Accesorios Baño',     categoryId: 'accesorios' },
  // Espejos
  { code: 'CJMR-L317',    name: 'Espejo Oval con Luz LED',                      finish: 'Luz LED + Marco Negro',  dimensions: '90×50 cm',  category: 'Espejos', categoryId: 'espejos' },
  { code: 'CJMR-L320',    name: 'Espejo con Marco Decorativo',                  finish: 'Luz LED + Marco Dorado', dimensions: '80×60 cm',  category: 'Espejos', categoryId: 'espejos' },
  { code: 'CJMR-H194',    name: 'Espejo LED 5 mm',                              finish: 'Luz LED + Táctil',       dimensions: '90×60 cm',  category: 'Espejos', categoryId: 'espejos' },
  { code: 'CJMR-H5076',   name: 'Espejo LED 5 mm',                              finish: 'Luz LED + Táctil',       dimensions: '80×60 cm',  category: 'Espejos', categoryId: 'espejos' },
  { code: 'CJMR-H5109',   name: 'Espejo LED 5 mm',                              finish: 'Luz LED + Táctil',       dimensions: '80×60 cm',  category: 'Espejos', categoryId: 'espejos' },
  { code: 'CJMR-H5111',   name: 'Espejo LED Touch 5 mm',                        finish: 'Luz LED + Táctil',       dimensions: '50×70 cm',  category: 'Espejos', categoryId: 'espejos' },
  { code: 'CJMR-231',     name: 'Espejo con Repisa Dorado 4 mm',                finish: 'Borde Pulido',           dimensions: '70×50 cm',  category: 'Espejos', categoryId: 'espejos' },
  { code: 'CJMR-321',     name: 'Espejo Redondo 4 mm',                          finish: 'Borde Pulido',           dimensions: '60×60 cm',  category: 'Espejos', categoryId: 'espejos' },
  // Sanitarios
  { code: 'F8203B',       name: 'Juego de Baño 4 Piezas – Línea F8203B',        material: 'Cerámica', dimensions: 'Inodoro 68×84 cm',  category: 'Sanitarios', categoryId: 'sanitarios' },
  { code: 'CH2251',       name: 'Juego de Baño 4 Piezas – Línea CH2251',        material: 'Cerámica', dimensions: 'Inodoro 67×81 cm',  category: 'Sanitarios', categoryId: 'sanitarios' },
  { code: 'LINEA-015',    name: 'Juego de Baño 4 Piezas – Línea 015',           material: 'Cerámica', dimensions: 'Inodoro 63×75 cm',  category: 'Sanitarios', categoryId: 'sanitarios' },
  { code: 'MINGITORIO',   name: 'Mingitorio c/ Grifería Incluida',              material: 'Cerámica', finish: 'Blanco Brillante', dimensions: '33×29×64 cm', category: 'Sanitarios', categoryId: 'sanitarios' },
  // Bachas & Vanitorys
  { code: '229A',         name: 'Bacha Rectangular',  material: 'Loza', finish: 'Blanco', dimensions: '480×370×130 mm', category: 'Bachas & Vanitorys', categoryId: 'bachas' },
  { code: '229D',         name: 'Bacha Rectangular',  material: 'Loza', finish: 'Blanco', dimensions: '480×370×130 mm', category: 'Bachas & Vanitorys', categoryId: 'bachas' },
  { code: '251C',         name: 'Bacha Redonda',       material: 'Loza', finish: 'Blanco', dimensions: '460×460×155 mm', category: 'Bachas & Vanitorys', categoryId: 'bachas' },
  { code: '420',          name: 'Bacha Oval',          material: 'Loza', finish: 'Blanco', dimensions: '480×350×145 mm', category: 'Bachas & Vanitorys', categoryId: 'bachas' },
  { code: 'TD6040-60B',  name: 'Vanitoy Mueble + Espejo',  material: 'Aluminio', dimensions: 'Mueble 600×460 mm', category: 'Bachas & Vanitorys', categoryId: 'bachas' },
  { code: 'TD6042-60B',  name: 'Vanitoy Mueble + Espejo',  material: 'Aluminio', dimensions: 'Mueble 600×460 mm', category: 'Bachas & Vanitorys', categoryId: 'bachas' },
  { code: 'K04-60',      name: 'Vanitoy Mueble + Espejo c/ Repisas 60 cm', material: 'Aluminio', dimensions: 'Mueble 610×475×500 mm', category: 'Bachas & Vanitorys', categoryId: 'bachas' },
  { code: 'K04-80',      name: 'Vanitoy Mueble + Espejo c/ Repisas 80 cm', material: 'Aluminio', dimensions: 'Mueble 810×475×500 mm', category: 'Bachas & Vanitorys', categoryId: 'bachas' },
  { code: 'G2960',       name: 'Vanitoy Gris Oscuro',  material: 'Aluminio', dimensions: 'Mueble 610×410×440 mm', category: 'Bachas & Vanitorys', categoryId: 'bachas' },
  { code: 'G2960SB',     name: 'Vanitoy c/ Mesada de Piedra', material: 'Aluminio', dimensions: 'Mueble 600×475×440 mm', category: 'Bachas & Vanitorys', categoryId: 'bachas' },
  { code: 'B8060SB',     name: 'Vanitoy Bicolor c/ Mesada Negra', material: 'Aluminio', dimensions: 'Mueble 600×475×490 mm', category: 'Bachas & Vanitorys', categoryId: 'bachas' },
]

const CATEGORIES = [
  { id: 'todas',      label: 'Todas' },
  { id: 'cocina',     label: 'Grifería Cocina' },
  { id: 'bano',       label: 'Grifería Baño' },
  { id: 'ducha',      label: 'Accesorios Ducha' },
  { id: 'desague',    label: 'Desagüe' },
  { id: 'baneras',    label: 'Bañeras & Cabinas' },
  { id: 'accesorios', label: 'Accesorios Baño' },
  { id: 'espejos',    label: 'Espejos' },
  { id: 'sanitarios', label: 'Sanitarios' },
  { id: 'bachas',     label: 'Bachas & Vanitorys' },
]

function ImagePlaceholder({ code }: { code: string }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-50 to-gray-100">
      <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <rect x="3" y="3" width="18" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8.5" cy="8.5" r="1.5" strokeLinecap="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15l-5-5L5 21" />
      </svg>
      <span className="text-[10px] text-gray-400 font-mono tracking-tight">{code}.jpg</span>
    </div>
  )
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md hover:border-gray-200 transition-all duration-300"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden relative">
        {!imgFailed ? (
          <img
            src={`/productos/${product.code}.jpg`}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <ImagePlaceholder code={product.code} />
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <span className="text-[11px] font-medium text-mq-accent uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="text-sm font-semibold text-mq-black mt-1 leading-snug line-clamp-2">
          {product.name}
        </h3>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-[11px] font-mono text-mq-gray bg-gray-50 border border-gray-100 rounded px-2 py-0.5 truncate">
            {product.code}
          </span>
        </div>
        {(product.material || product.finish || product.dimensions) && (
          <p className="text-[11px] text-mq-gray mt-2 leading-relaxed">
            {[product.material, product.finish, product.dimensions].filter(Boolean).join(' · ')}
          </p>
        )}
        <a
          href={`https://wa.me/5492236235505?text=Hola, me interesa el producto ${product.code} – ${product.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block text-center text-xs font-medium text-mq-black border border-gray-200 rounded-xl py-2 hover:border-mq-accent hover:text-mq-accent transition-colors duration-200"
        >
          Consultar precio
        </a>
      </div>
    </motion.div>
  )
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('todas')

  const filtered =
    activeCategory === 'todas'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.categoryId === activeCategory)

  const count =
    activeCategory === 'todas'
      ? PRODUCTS.length
      : filtered.length

  return (
    <section id="productos" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-mq-black mb-4">
            Catálogo de Productos
          </h2>
          <p className="text-xl text-mq-gray max-w-2xl mx-auto font-light">
            Griferías · Sanitarios · Espejos · Bañeras — Colección 2026. Precios c/ IVA incluido.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-10 scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-mq-black text-white border-mq-black'
                  : 'bg-white text-mq-gray border-gray-200 hover:border-gray-400 hover:text-mq-black'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-sm text-mq-gray mb-6">
          {count} producto{count !== 1 ? 's' : ''}
          {activeCategory !== 'todas' && (
            <button
              onClick={() => setActiveCategory('todas')}
              className="ml-2 text-mq-accent hover:underline"
            >
              Ver todos
            </button>
          )}
        </p>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.code} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-mq-gray mt-12 font-light"
        >
          Todos los precios incluyen IVA · Consultá disponibilidad de stock
        </motion.p>
      </div>
    </section>
  )
}
