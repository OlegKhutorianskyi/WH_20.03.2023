import React from 'react'
import AddProduct from '../../components/AddProduct'
import s from './style.module.css'

const AddPage = () => {
  return (
    <div className={s.container}>
        <AddProduct/>
    </div>
  )
}

export default AddPage