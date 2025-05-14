import { useEffect, useState } from 'react'
import { getProducts } from '../../api/api'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const fetching = async () => {
      const data = await getProducts()
      setProducts(data.products)
    }
    fetching()
  }, [])

  const handleChange = ({ target: { value } }) => {
    if (!value) {
      setSearchParams({})
      return
    }
    searchParams.set('search', value)
    setSearchParams(searchParams)
  }

  const searchValue = searchParams.get('search') ?? ''

  const filteredProducts = products.filter((el) =>
    el.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  const location = useLocation()

  return (
    <>
      <input
        type='text'
        value={searchValue}
        onChange={handleChange}
        placeholder='search by title'
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`} state={location}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ProductsPage
