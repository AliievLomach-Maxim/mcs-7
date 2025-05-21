import { Route, Routes } from 'react-router-dom'
// import ProductsPage from './pages/ProductsPage/ProductsPage'
// import HomePage from './pages/HomePage/HomePage'
// import ProductsDetailsPage from './pages/ProductsDetailsPage/ProductsDetailsPage'
// import ProductMeta from './components/ProductMeta/ProductMeta'
// import ProductDimensions from './components/ProductDimensions/ProductDimensions'
// import HomeLayout from './layouts/HomeLayout/HomeLayout'
import { lazy, Suspense } from 'react'
import TodoPage from './pages/TodoPage/TodoPage'

const HomeLayout = lazy(() => import('./layouts/HomeLayout/HomeLayout'))
const ProductDimensions = lazy(() => import('./components/ProductDimensions/ProductDimensions'))
const ProductMeta = lazy(() => import('./components/ProductMeta/ProductMeta'))
const ProductsDetailsPage = lazy(() => import('./pages/ProductsDetailsPage/ProductsDetailsPage'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage/ProductsPage'))

const App = () => {
  return (
    <div>
      {/* <Nav /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/todos' element={<TodoPage />} />
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/products/:productId' element={<ProductsDetailsPage />}>
              <Route path='meta' element={<ProductMeta />} />
              <Route path='dimensions' element={<ProductDimensions />} />
            </Route>
          </Route>
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
