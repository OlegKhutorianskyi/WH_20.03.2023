import React from 'react'
import s from './style.module.css'

const ProductItem = ({id, title, price}) => {
  return (
    <div className={s.container}>
        <p>{title}</p>
        <p>{price}</p>
    </div>
  )
}

export default ProductItem