import { useSelector } from 'react-redux'

const Loader = () => {
  const isLoading = useSelector((state) => state.root.isLoading)
  return isLoading ? <div>Loading...</div> : null
}

export default Loader
