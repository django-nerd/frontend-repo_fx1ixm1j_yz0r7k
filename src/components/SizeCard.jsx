import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Image as ImageIcon, Layers, ChevronRight } from 'lucide-react'

export default function SizeCard({ title, description, sizeKey, layersAllowed }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      className="relative w-full h-64 [perspective:1000px]"
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-purple-500/20 p-[2px]">
        <div className="relative h-full rounded-2xl bg-white/80 backdrop-blur-xl overflow-hidden">
          <motion.div
            className="absolute inset-0 [transform-style:preserve-3d]"
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Front */}
            <div className="absolute inset-0 grid place-items-center p-6 backface-hidden">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-purple-700">{title}</h3>
                <p className="mt-2 text-purple-900/70">{description}</p>
                <button onClick={() => setFlipped(true)} className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow hover:shadow-lg">
                  Customize <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Back */}
            <div className="absolute inset-0 rotate-y-180 backface-hidden">
              <div className="h-full p-5 flex flex-col">
                <p className="text-purple-900/80 text-sm">Upload a reference and add notes. Layers {layersAllowed ? 'available' : 'not available'}.</p>
                <div className="mt-3 grid grid-cols-1 gap-3">
                  <label className="border-2 border-dashed border-purple-300 rounded-xl p-4 text-purple-700/80 flex items-center gap-3 cursor-pointer hover:bg-purple-50/60">
                    <ImageIcon size={18} />
                    <span>Upload reference image</span>
                    <input type="file" accept="image/*" className="hidden" id={`file-${sizeKey}`} />
                  </label>
                  {layersAllowed && (
                    <div className="flex items-center gap-2 text-purple-900">
                      <Layers size={18} />
                      <span className="text-sm">Layers: {sizeKey === 'medium' ? 2 : 3}</span>
                    </div>
                  )}
                  <textarea placeholder="Notes (flavors, message, details)" className="mt-1 w-full rounded-xl border border-purple-200 focus:outline-none focus:ring-2 focus:ring-pink-400 p-3 text-sm bg-white/70" rows={3} />
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <button onClick={() => setFlipped(false)} className="px-4 py-2 rounded-xl bg-white text-purple-700 ring-1 ring-purple-200 hover:bg-purple-50">Back</button>
                  <a href="#order" className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium">Continue</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
