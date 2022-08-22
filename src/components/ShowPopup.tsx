import React, {FC} from 'react'
import {IoCloseCircleOutline} from 'react-icons/io5'

type PropsType = {
	addedCount: number
	onShow: (arg0: object) => void
	onClickAdd: () => void
	pizza: {imageUrl: string, title: string, info: string, price: number}
}

const ShowPopup: FC<PropsType> = ({pizza, onShow, onClickAdd, addedCount}) => {
	
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
					        onClick={onClickAdd}
					>
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
		</div>
	)
}

export default ShowPopup
