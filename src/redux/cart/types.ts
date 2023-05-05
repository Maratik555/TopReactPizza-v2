export type CartItem = {
    id: string
    title: string
    info: string
    price: number
    price1: number
    price2: number
    imageUrl: string
    type: string
    size: number
    count: number
};

export interface CartSliceState {
    totalPrice: number
    items: CartItem[]
}
