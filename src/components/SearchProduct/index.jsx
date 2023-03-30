import React from 'react'
import { useDispatch } from 'react-redux';
import { productsSearchFilterAction } from '../../store/reducers/productReducer';
import s from './style.module.css'

const SearchProduct = () => {
  const dispatch = useDispatch();
  const searchOnChange = (e) => {
    dispatch(productsSearchFilterAction(e.target.value))
};
  return (
    <div className={s.container}>
        <div className={s.form}>
            <input 
              type="search" 
              name="search" 
              id="search" 
              placeholder='Название' 
              onChange={searchOnChange}
            />
        </div>
          <div className={s.sortBlock}>
              <p>Отсортировать по:</p>
          <select>
              <option>по возрастанию</option>
              <option>по убыванию</option>
          </select>
        </div>
    </div>
  )
}

export default SearchProduct