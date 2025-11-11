import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import SizeCard from './components/SizeCard'
import OrderForm from './components/OrderForm'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b14] text-white">
      <Hero />

      {/* Window-frame inspired section selector */}
      <section id="sizes" className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-pink-900/10" />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-pink-200 to-white"
          >
            Choose your size
          </motion.h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <SizeCard title="Small" description="Perfect for intimate gatherings" sizeKey="small" layersAllowed={false} />
            <SizeCard title="Medium" description="Great for families (2 layers)" sizeKey="medium" layersAllowed={true} />
            <SizeCard title="Large" description="Celebrate big moments (3 layers)" sizeKey="large" layersAllowed={true} />
          </div>
        </div>
      </section>

      {/* Order form */}
      <section id="order" className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_10%,rgba(168,85,247,0.25),transparent),radial-gradient(500px_250px_at_80%_90%,rgba(236,72,153,0.25),transparent)]" />
        <div className="relative max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-pink-200 to-white"
          >
            Place your order
          </motion.h2>
          <div className="mt-10">
            <OrderForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center text-white/70">
          Fresh cakes • Delivery included • Divine Flavours, Oman
        </div>
      </footer>
    </div>
  )
}

export default App
