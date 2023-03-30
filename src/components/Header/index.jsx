import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './style.module.css'

const Header = () => {
    const chekClass = ({isActive}) => isActive ? s.active: '';

  return (
    <nav className={s.nav}>
        <NavLink to='/' className={chekClass}>
            Добавить
        </NavLink>
        <NavLink to='/show' className={chekClass}>
            Отобразить
        </NavLink>
    </nav>
  )
}

export default Header