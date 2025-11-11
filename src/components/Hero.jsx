import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0b0b14]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(168,85,247,0.25),transparent),radial-gradient(800px_400px_at_80%_120%,rgba(236,72,153,0.25),transparent)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 text-center px-6"
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/90 ring-1 ring-white/15 backdrop-blur">
          Oman • Delivery Included
        </span>
        <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-pink-200 via-white to-purple-200">
          Divine Flavours
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/80">
          Fresh, custom cakes crafted to your taste. Choose a size, upload your inspiration, and we’ll handle the rest.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 pointer-events-auto">
          <a href="#sizes" className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:scale-[1.02] transition">
            Explore Sizes
          </a>
          <a href="#order" className="px-5 py-3 rounded-xl bg-white/10 text-white font-semibold backdrop-blur ring-1 ring-white/15 hover:bg-white/15 transition">
            Start Order
          </a>
        </div>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(147,51,234,0.25),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(219,39,119,0.25),transparent_45%)]" />
    </section>
  )
}
