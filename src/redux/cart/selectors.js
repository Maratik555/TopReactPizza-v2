// import { RootState } from '../store'

export const selectCart = (state) => state.cart

export const selectCartItemById = (id) => (state) =>
	state.cart.items.find((obj) => obj.id === id)