import type { Dispatch, SetStateAction } from 'react'

const tipOptions = [
  { id: 'tip-10', value: 0.10, label: '10%' },
  { id: 'tip-20', value: 0.20, label: '20%' },
  { id: 'tip-50', value: 0.50, label: '50%' },
]

type TipPercentageFormProps = {
  setTip: Dispatch<SetStateAction<number>>
  tip: number
}

export default function TipPercentageForm({ setTip, tip }: TipPercentageFormProps) {
  return (
    <div className="border-t border-gray-100 pt-5 mt-5">
      <h3 className="font-black text-2xl mb-3 text-slate-900">Propina:</h3>
      <form className="space-y-2">
        {tipOptions.map(tipOption => (
          <div key={tipOption.id} className="flex items-center gap-2">
            <input
              id={tipOption.id}
              type="radio"
              name="tip"
              value={tipOption.value}
              onChange={e => setTip(+e.target.value)}
              checked={tipOption.value === tip}
              className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
            />
            <label htmlFor={tipOption.id} className="text-sm font-medium text-slate-700">
              {tipOption.label}
            </label>
          </div>
        ))}
      </form>
    </div>
  )
}