import React from 'react'
import { useDispatch } from 'react-redux';
import { addProductAction } from '../../store/reducers/productReducer';
import s from './style.module.css'

const AddProduct = () => {
    const dispatch = useDispatch();

    const submit = e => {
        e.preventDefault()
        const {title, price, discount} = e.target;


          dispatch(addProductAction(title.value, price.value, discount.value))

        title.value = '';
        price.value = '';
        discount.value = '';
    }

  return (
    <form onSubmit={submit} className={s.form}>
        <input type="text" placeholder='Название'  name='title'/>
        <input type="number" placeholder='Цена' name='price'/>
        <input type="number" placeholder='Процент скидки' name='discount'/>
        <button>Добавить</button>
    </form>
  )
}

export default AddProduct