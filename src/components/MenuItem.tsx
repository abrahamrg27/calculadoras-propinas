import type { MenuItem } from '../types'

type MenuItemProps = {
  item: MenuItem
  addItem: (item: MenuItem) => void
}

export default function MenuItemComponent({ item, addItem }: MenuItemProps) {
  return (
    <button
      className="border border-teal-200 hover:bg-teal-50 w-full p-3 flex justify-between rounded-lg font-medium transition-colors text-slate-800"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-bold">${item.price}</p>
    </button>
  )
}