import { Link, NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getSingleProduct } from '../../api/api'
import { useEffect, useState } from 'react'

const ProductsDetailsPage = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (productId) {
      const fetching = async () => {
        const res = await getSingleProduct(productId)
        setProduct(res)
      }
      fetching()
    }
  }, [productId])

  const navigate = useNavigate()

  const location = useLocation()
  const handleClick = () => {
    navigate(location.state ?? '/products')
  }

  return (
    product && (
      <div>
        <button onClick={handleClick}>Back</button>
        <p>{product.id}</p>
        <h1>{product.title}</h1>
        <hr />
        <ul>
          <li>
            <NavLink to='meta'>Meta</NavLink>
          </li>
          <li>
            <NavLink to='dimensions'>Dimensions</NavLink>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
    )
  )
}

export default ProductsDetailsPage
