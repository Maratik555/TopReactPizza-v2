import {CartItem} from "../redux/cart/types"

export const calcTotalPrice = (items: CartItem[]) => items.reduce((sum, obj) => obj.size === 26 ? obj.price * obj.count + sum : obj.size === 30 ? obj.price1 * obj.count + sum : obj.price2 * obj.count + sum, 0)

