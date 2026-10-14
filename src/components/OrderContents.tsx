import type { MenuItem, OrderItem } from '../types'

type OrderContentsProps = {
  order: OrderItem[]
  removeItem: (id: MenuItem['id']) => void
}

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
  return (
    <div>
      <h2 className="font-black text-3xl mb-5 text-slate-900">Consumo</h2>
      <div className="space-y-3">
        {order.map(item => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b border-gray-100 py-4"
          >
            <div>
              <p className="text-lg font-semibold text-blue-900">
                {item.name} - ${item.price.toFixed(2)}
              </p>
              <p className="text-sm font-bold text-slate-800">
                Cantidad: {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <button
              className="bg-red-600 hover:bg-red-700 h-7 w-7 rounded-full text-white font-black flex items-center justify-center text-xs transition-colors"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}