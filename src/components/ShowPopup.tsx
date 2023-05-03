import React from 'react'
import {IoCloseCircleOutline} from 'react-icons/io5'

type PropsType = {
	addedCount: number
	onShow: (arg0: object) => void
	onClickAdd: () => void
	pizza: {imageUrl: string, title: string, info: string, price: number}
}

const ShowPopup = ({pizza, onShow, onClickAdd, addedCount}: PropsType) => {
	
	return (
		<div className='fullItem'>
			<div>
				<IoCloseCircleOutline className="close-popup" onClick={() => onShow(pizza)}/>
				<img src={pizza.imageUrl}  alt='pizza'/>
				<h2>{pizza.title}</h2>
				<p>{pizza.info}</p>
				<br/>
				<h3>{pizza.price} ₽</h3>
				<br/>
					<button className="button button--outline button--add"
					        onClick={onClickAdd}>
						<span>В корзину</span>
						{addedCount > 0 && <i>{addedCount}</i>}
					</button>
			</div>
		</div>
	)
}

export default ShowPopup
