import React, {FC} from 'react'
import ShowPopup from '../ShowPopup'
import {useDispatch, useSelector} from 'react-redux'
import {addItem} from '../../redux/cart/cartSlice'
import {selectCartItemById} from '../../redux/cart/selectors'
import {CartItem} from '../../redux/cart/types'

const typeNames = ['тонкое', 'традиционное']

interface PizzaBlockProps {
	id: string
	title: string
	info: string
	imageUrl: string
	price: number
	types: number[]
	sizes: number[]
}


export const PizzaBlock:FC<PizzaBlockProps> = ({id, title, info, imageUrl, price, types, sizes}) => {
	
	
	const dispatch = useDispatch()
	const cartItem = useSelector(selectCartItemById(id))
	const [activeType, setActiveType] = React.useState(0)
	const [activeSize, setActiveSize] = React.useState(0)
	let [show, setShow] = React.useState(false)
	let [fullItem, setFullItem] = React.useState({imageUrl, title, price, info})
	
	// @ts-ignore
	const addedCount = cartItem ? cartItem.count : 0
	
	
	const onShow = ({...item}) => {
		// @ts-ignore
		setFullItem(fullItem = item)
		setShow(prev => !prev)
	}
	
	
	const onClickAdd = () => {
		const item : CartItem = {
			id,
			info,
			title,
			price,
			imageUrl,
			type: typeNames[activeType],
			size: sizes[activeSize],
			count: 0
		}
		dispatch(addItem(item))
	}
	
	return (
		<div className="pizza-block-wrapper">
			<div className="pizza-block">
				<img className="pizza-block__image"
				     src={imageUrl}
				     alt="Pizza" onClick={() => onShow({info, title, imageUrl, price})}/>
				<br/>
				<br/>
				<h4 className="pizza-block__title">{title}</h4>
				<h5 className="pizza-block__info">{info}</h5>
				<div className="pizza-block__selector">
					<ul>
						{types.map(type => (
							<li onClick={() => setActiveType(type)} key={type}
							    className={activeType === type ? 'active' : ''}
							>
								{typeNames[type]}
							</li>
						))}
					</ul>
					<ul>
						{sizes.map((size, i) => (
							<li onClick={() => setActiveSize(i)} key={size}
							    className={activeSize === i ? 'active' : ''}>
								{size} см.
							</li>
						))}
					</ul>
				</div>
				<div className="pizza-block__bottom">
					<div className="pizza-block__price"> от {price} ₽</div>
					<button onClick={onClickAdd} className="button button--outline button--add">
						<svg
							width="12"
							height="12"
							viewBox="0 0 12 12"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
								fill="white"
							/>
						</svg>
						<span>Добавить</span>
						{addedCount > 0 && <i>{addedCount}</i>}
					</button>
				</div>
				{show && <ShowPopup addedCount={addedCount} pizza={fullItem} onClickAdd={onClickAdd} onShow={onShow}/>
				}
			</div>
		</div>
	)
}