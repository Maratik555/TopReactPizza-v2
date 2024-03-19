import React from 'react'
import {IoCloseCircleOutline} from 'react-icons/io5'

type PropsType = {
	onShow: (arg0: object) => void
	pizza: {imageUrl: string, title: string, info: string}
}

const ShowPopup = ({pizza, onShow}: PropsType) => {
	
	return (
		<div className='fullItem'>
			<div>
				<IoCloseCircleOutline className="close-popup" onClick={() => onShow(pizza)}/>
				<img src={pizza.imageUrl}  alt='pizza'/>
				<h2>{pizza.title}</h2>
				<p><b>СОСТАВ: </b><br/> {pizza.info}</p>
				<br/>
				Сделайте заказ и получите
				бонусные баллы 🟢
				<br/>
				<br/>
			</div>
		</div>
	)
}

export default ShowPopup
