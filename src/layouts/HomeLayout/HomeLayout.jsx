import { Outlet } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'

const HomeLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <footer>Home footer</footer>
    </div>
  )
}

export default HomeLayout
