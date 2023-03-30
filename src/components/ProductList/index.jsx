import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from '../ProductItem'
import s from './style.module.css'


const ProductList = () => {
    const products = useSelector(state => state)
  return (
    <div className={s.conatiner}>
        {
        products
        .filter(({show}) => show)
        .map(item => <ProductItem key={item.id} {...item}/>)
        
        }
    </div>
  )
}

export default ProductList