import React from 'react'
import {IoCloseCircleOutline} from 'react-icons/io5'

type PropsType = {
	onShow: (arg0: object) => void
	pizza: {imageUrl: string, title: string, info: string, price: number}
}

const ShowPopup = ({pizza, onShow}: PropsType) => {
	
	return (
		<div className='fullItem'>
			<div>
				<IoCloseCircleOutline className="close-popup" onClick={() => onShow(pizza)}/>
				<img src={pizza.imageUrl}  alt='pizza'/>
				<h2>{pizza.title}</h2>
				<p>{pizza.info}</p>
		</div>
	)
}

export default ShowPopup
