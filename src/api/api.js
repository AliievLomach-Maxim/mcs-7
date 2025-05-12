import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com'

export const getProducts = async () => {
  const { data } = await axios(`/products`)
  return data
}

export const getSingleProduct = async (id) => {
  const { data } = await axios(`/products/${id}`)
  return data
}
