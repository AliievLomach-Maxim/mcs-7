import { useEffect, useState } from 'react'
import { getProducts } from '../../api/api'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProductsPage = () => {
  const lang = useSelector((state) => state.lang.current)

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
      <h1>Current: {lang}</h1>
      <br />
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
