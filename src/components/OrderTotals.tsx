import { useMemo } from 'react'
import type { OrderItem } from '../types'

type OrderTotalsProps = {
  order: OrderItem[]
  tip: number
  placeOrder: () => void
}

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  )

  const tipAmount = useMemo(() => subtotalAmount * tip, [subtotalAmount, tip])
  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [subtotalAmount, tipAmount])

  return (
    <div className="border-t border-gray-100 pt-5 mt-5 space-y-3">
      <h2 className="font-black text-2xl text-slate-900">Totales y Propina:</h2>
      <p className="text-slate-700">
        Subtotal a pagar: <span className="font-bold">${subtotalAmount.toFixed(2)}</span>
      </p>
      <p className="text-slate-700">
        Propina: <span className="font-bold">${tipAmount.toFixed(2)}</span>
      </p>
      <p className="text-lg text-slate-900 font-bold">
        Total a Pagar: <span>${totalAmount.toFixed(2)}</span>
      </p>

      <button
        className="w-full bg-black hover:bg-zinc-900 p-3 uppercase text-white font-bold transition-colors disabled:opacity-50 mt-5 tracking-wider text-sm"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        GUARDAR ORDEN
      </button>
    </div>
  )
}