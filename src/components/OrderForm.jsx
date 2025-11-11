import React, { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function OrderForm() {
  const [form, setForm] = useState({
    customer_name: '',
    phone: '',
    size: 'small',
    notes: '',
    layers: null,
    reference_image: null,
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (name === 'reference_image') {
      setForm((f) => ({ ...f, reference_image: files?.[0] || null }))
    } else if (name === 'layers') {
      setForm((f) => ({ ...f, layers: value ? Number(value) : null }))
    } else {
      setForm((f) => ({ ...f, [name]: value }))
    }
  }

  const handleSizeChange = (e) => {
    const size = e.target.value
    setForm((f) => ({ ...f, size, layers: size === 'medium' ? 2 : size === 'large' ? 3 : null }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const fd = new FormData()
      fd.append('customer_name', form.customer_name)
      fd.append('phone', form.phone)
      fd.append('size', form.size)
      if (form.layers !== null) fd.append('layers', String(form.layers))
      if (form.notes) fd.append('notes', form.notes)
      if (form.reference_image) fd.append('reference_image', form.reference_image)

      const res = await fetch(`${API_BASE}/orders`, {
        method: 'POST',
        body: fd,
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Failed to create order')
      setStatus(`Order created! Total: OMR ${data.price_omr}`)
    } catch (err) {
      setStatus(`Error: ${err.message}`)
    }
  }

  return (
    <form onSubmit={submit} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 ring-1 ring-purple-200/60 shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-purple-900">Name</label>
          <input name="customer_name" value={form.customer_name} onChange={handleChange} required className="mt-1 w-full rounded-xl border border-purple-200 p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-900">Phone</label>
          <input name="phone" value={form.phone} onChange={handleChange} required className="mt-1 w-full rounded-xl border border-purple-200 p-3 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white" />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-900">Size</label>
          <select name="size" value={form.size} onChange={handleSizeChange} className="mt-1 w-full rounded-xl border border-purple-200 p-3 bg-white">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-900">Reference Image</label>
          <input type="file" name="reference_image" accept="image/*" onChange={handleChange} className="mt-1 w-full rounded-xl border border-purple-200 p-2 bg-white" />
        </div>
        {(form.size === 'medium' || form.size === 'large') && (
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-purple-900">Layers</label>
            <input name="layers" value={form.size === 'medium' ? 2 : 3} readOnly className="mt-1 w-full rounded-xl border border-purple-200 p-3 bg-gray-50 text-purple-900" />
            <p className="text-xs text-purple-700/70 mt-1">Medium: 2 layers • Large: 3 layers</p>
          </div>
        )}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-purple-900">Notes</label>
          <textarea name="notes" rows={3} value={form.notes} onChange={handleChange} className="mt-1 w-full rounded-xl border border-purple-200 p-3 bg-white" placeholder="Preferred flavors, frosting, message on cake, delivery time..." />
        </div>
      </div>
      <button className="mt-5 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transition">Place Order</button>
      {status && <p className="mt-3 text-sm text-purple-900">{status}</p>}
    </form>
  )
}
