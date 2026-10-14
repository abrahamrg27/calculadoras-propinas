import type { OrderItem } from "../types"


type orderTotalProps ={
    order: OrderItem[]
    tip: number
    placeOrder:() => void
}

export default function OrderTotals({order, tip, placeOrder}: orderTotalProps){
    const subTotal = order.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const total = subTotal + tip
}