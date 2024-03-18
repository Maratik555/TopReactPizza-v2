export type CartItem = {
    id: string
    title: string
    info: string
    price: number
    imageUrl: string
    type: string
    size: number
    count: number
};

export interface CartSliceState {
    totalPrice: number
    items: CartItem[]
}
