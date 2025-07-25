import { useState } from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: "Air Jordan 1 Retro",
    price: "$200",
    image: "/jordan.png",
    description: "Iconic design meets premium materials in this legendary sneaker."
  },
  {
    id: 2,
    name: "Nike Air Max 90",
    price: "$150",
    image: "/about.png",
    description: "Classic silhouette with modern cushioning and unmatched comfort."
  },
  {
    id: 3,
    name: "Nike Dunk Low",
    price: "$120",
    image: "/about-2.png",
    description: "Clean, casual, and perfect for any sneaker rotation."
  }
];

export default function Products() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-8">
      <motion.h1 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-center mb-12"
      >
        Nike Shoes Collection
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 rounded-xl overflow-hidden shadow-lg backdrop-blur-md"
          >
            <div className="p-4">
              <img src={product.image} alt={product.name} className="rounded-xl h-60 object-contain w-full" />
              <h2 className="mt-4 text-xl font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-300 mt-1">{product.description}</p>
              <p className="text-lg font-bold text-yellow-400 mt-2">{product.price}</p>
              <button 
                onClick={() => setSelected(product)} 
                className="mt-4 w-full py-2 bg-yellow-500 text-black rounded-xl hover:bg-yellow-400 transition"
              >
                View More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {selected && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <motion.div 
            initial={{ scale: 0.8 }} 
            animate={{ scale: 1 }} 
            className="bg-white text-black p-6 rounded-2xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">{selected.name}</h2>
            <img src={selected.image} alt={selected.name} className="rounded-xl h-64 object-contain w-full" />
            <p className="mt-4 text-gray-800">{selected.description}</p>
            <p className="text-lg font-bold text-gray-900 mt-2">{selected.price}</p>
            <button 
              onClick={() => setSelected(null)} 
              className="mt-4 w-full py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
