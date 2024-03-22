import React from 'react'
import s from './NotFound.module.scss'
import {Link} from 'react-router-dom'


const NotFoundBlock = () => {
  return (
    <div className={s.root}>
      <h1>404 NotFound 😕</h1>
      <br/>
      <button className='button' ><Link to='/'>Вернуться на главную</Link></button>
    </div>
  )
};

export default NotFoundBlock
