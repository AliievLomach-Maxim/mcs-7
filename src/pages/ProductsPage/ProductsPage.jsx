import { useEffect, useState } from 'react'
import { getProducts } from '../../api/api'
import { Link } from 'react-router-dom'

const ProductsPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetching = async () => {
      const data = await getProducts()
      setProducts(data.products)
    }
    fetching()
  }, [])

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default ProductsPage
