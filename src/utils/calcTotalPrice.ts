import {CartItem} from "../redux/cart/types"

export const calcTotalPrice = (items: CartItem[]) => items.reduce((sum, obj) =>  obj.price * obj.count + sum, 0)

