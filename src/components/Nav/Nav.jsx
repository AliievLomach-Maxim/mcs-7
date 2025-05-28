import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Nav.module.css'

const navClasses = ({ isActive }) => (isActive ? css.active : '')

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/' className={navClasses}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/products' className={navClasses}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to='/articles' className={navClasses}>
              Articles
            </NavLink>
          </li>
          <li>
            <NavLink to='/todos' className={navClasses}>
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink to='/posts' className={navClasses}>
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
