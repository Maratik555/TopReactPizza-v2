import React, {FC} from 'react'
import ShowPopup from '../ShowPopup'
import {useDispatch} from 'react-redux'
import {addItem} from '../../redux/cart/cartSlice'
import {CartItem} from '../../redux/cart/types'

const typeNames = ['тонкое', 'традиционное']

interface PizzaBlockProps {
    id: string
    title: string
    info: string
    imageUrl: string
    price1: number
    price2: number
    types: number[]
    sizes: number[]
}

export const PizzaBlock: FC<PizzaBlockProps> = ({id, title, info, imageUrl, price1, price2, types, sizes}) => {
    const dispatch = useDispatch()
    const [activeType, setActiveType] = React.useState(0)
    const [activeSize, setActiveSize] = React.useState(0)
    let [show, setShow] = React.useState(false)
    let [fullItem, setFullItem] = React.useState({imageUrl, title, info})

    const onShow = ({...item}) => {
        // @ts-ignore
        setFullItem(fullItem = item)
        setShow(prev => !prev)
    }

    sizes = sizes.slice(1)
    id = activeSize === 0 ? id + '_cl' : id

    const onClickAdd = () => {
        const item: CartItem = {
            id: id,
            info,
            title,
            price1,
            price2,
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
                     alt="Pizza" onClick={() => onShow({info, title, imageUrl})}/>
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
                                className={activeSize === i ? 'active' : ''}
                            >
                                {size} см.
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pizza-block__price">
                    {activeSize === 0 ? price1 + '₽' : price2 + '₽'}
                </div>
                <div className="pizza-block__bottom">
                    <button onClick={onClickAdd} className="button button--outline">
                        <span> В корзину</span>
                </button>
                </div>
                {show && <ShowPopup pizza={fullItem} onShow={onShow}/>
                }
            </div>
        </div>
    )
}
