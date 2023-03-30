import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProductList from '../../components/ProductList'
import SearchProduct from '../../components/SearchProduct'
import { productsResetFilterAction } from '../../store/reducers/productReducer'
import s from './style.module.css'

const ShowPage = () => {
  
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(productsResetFilterAction())
  },[])

  return (
    <div className={s.container}>
        <SearchProduct/>
        <ProductList/>
    </div>
  )
}

export default ShowPage