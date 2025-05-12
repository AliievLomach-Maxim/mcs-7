import { NavLink, Outlet } from 'react-router-dom'

const ProductsLayout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>My Home</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>Products footer</footer>
    </div>
  )
}

export default ProductsLayout
