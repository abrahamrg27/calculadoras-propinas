import MenuItemComponent from './components/MenuItem'
import OrderContents from './components/OrderContents'
import OrderTotals from './components/OrderTotals'
import TipPercentageForm from './components/TipPercentageForm'
import { menuItems } from './data/db'
import useOrder from './Hooks/useOrder'

function App() {
  const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-teal-400 py-6 shadow-sm">
        <h1 className="text-center text-3xl md:text-4xl font-black text-slate-900">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-12 grid md:grid-cols-2 px-6 gap-16">
        <div>
          <h2 className="text-4xl font-black mb-6 text-slate-900">Menú</h2>
          <div className="space-y-3">
            {menuItems.map(item => (
              <MenuItemComponent key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-slate-300 p-6 rounded-xl h-fit">
          {order.length > 0 ? (
            <div className="space-y-6">
              <OrderContents order={order} removeItem={removeItem} />
              <TipPercentageForm setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </div>
          ) : (
            <p className="text-center font-medium text-slate-500 py-20">
              La orden esta vacia
            </p>
          )}
        </div>
      </main>
    </div>
  )
}

export default App