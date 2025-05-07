import LangProvider from './context/LangProvider'
import TestContext from './testComponents/TestContext'
import TestMemo from './testComponents/testMemo'
import TestRef from './testComponents/TestRef'
import TestRefTimer from './testComponents/TestRefTimer'

const App = () => {
  return (
    <div>
      {/* <h1>{testRef}</h1> */}
      {/* <TestRefTimer /> */}
      {/* <TestRef /> */}
      <LangProvider>
        <TestContext />
        <TestMemo />
      </LangProvider>
    </div>
  )
}

export default App

// import { useEffect, useState } from 'react'
// import { getArticles } from './api/api'
// import SearchForm from './components/SearchForm/SearchForm'

// const App = () => {
//   const [hits, setHits] = useState([])
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState(false)
//   const [searchQuery, setSearchQuery] = useState('')
//   const [page, setPage] = useState(1)

//   useEffect(() => {
//     if (!searchQuery) return

//     const fetching = async () => {
//       try {
//         setIsLoading(true)
//         setError(false)
//         // setHits([])
//         const data = await getArticles(searchQuery, page)
//         // setHits(page === 1 ? data.hits : [...hits, ...data.hits])
//         setHits((prev) => (page === 1 ? data.hits : [...prev, ...data.hits]))
//       } catch (error) {
//         console.error(error)
//         setError(true)
//       } finally {
//         setIsLoading(false)
//       }
//     }
//     fetching()
//   }, [page, searchQuery])

//   const handleSearch = (searchValue) => {
//     setSearchQuery(searchValue)
//     setPage(1)
//   }

//   const handleLoadMore = async () => {
//     setPage(page + 1)
//   }

//   return (
//     <div>
//       <SearchForm search={handleSearch} isDisabled={isLoading} />
//       {error && <h2>Oops some error... Pls reload page! </h2>}
//       {!hits.length && !isLoading ? (
//         <h2>No results...</h2>
//       ) : (
//         <ul>
//           {hits.map((el) => (
//             <li key={el.objectID}>
//               <a href={el.url}>{el.title || el.story_title}</a>
//             </li>
//           ))}
//         </ul>
//       )}
//       {isLoading && <h2>Loading...</h2>}
//       {hits.length > 0 && <button onClick={handleLoadMore}>Load more...</button>}
//     </div>
//   )
// }

// export default App
