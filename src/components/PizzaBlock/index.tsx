import React, {FC} from 'react'
import ShowPopup from '../ShowPopup'
import {useDispatch, useSelector} from 'react-redux'
import {addItem, minusItem} from '../../redux/cart/cartSlice'
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

	const cartMinus = () => dispatch(minusItem(id))

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
					{addedCount > 0 ? <>
						<button className="button button--outline button--circle cart__item-count-minus" onClick={cartMinus}
						>
							<svg
							width="10"
							height="10"
							viewBox="0 0 10 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
								fill="#EB5A1E"/>
							<path
								d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
								fill="#EB5A1E"/>
						</svg></button>
						<b>{addedCount}</b>
						<button className="button button--outline button--circle cart__item-count-plus" onClick={onClickAdd}
						>
							<svg
								width="10"
								height="10"
								viewBox="0 0 10 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
									fill="#EB5A1E"/>
								<path
									d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
									fill="#EB5A1E"/>
							</svg>
						</button>
					</>
					: <button onClick={onClickAdd} className="button button--outline button--add">
							<span>В корзину</span>
							{addedCount > 0 && <i>{addedCount}</i>}
						</button>
					}
				</div>
				{show && <ShowPopup addedCount={addedCount} pizza={fullItem} onClickAdd={onClickAdd} onShow={onShow}/>
				}
			</div>
		</div>
	)
}