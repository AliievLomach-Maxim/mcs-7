import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createArticleThunk, getArticlesThunk } from '../../store/articles/articlesOps'
import { Field, Form, Formik } from 'formik'
import {
  selectArticles,
  selectFilteredArticles,
  selectMemoFilteredArticles,
} from '../../store/articles/articlesSlice'
import { changeSearchValue, selectSearchValue } from '../../store/filters/filtersSlice'

const ArticlesPage = () => {
  // const { isLoading, isError } = useSelector(selectArticles)
  const searchValue = useSelector(selectSearchValue)

  const filteredData = useSelector(selectMemoFilteredArticles)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArticlesThunk())
  }, [dispatch])

  const handleSubmit = ({ articleName }, { resetForm }) => {
    dispatch(createArticleThunk({ name: articleName }))
    resetForm()
  }

  const handleSearch = ({ target: { value } }) => {
    dispatch(changeSearchValue(value))
  }

  // const filteredData = useMemo(() => data.filter((el) => el.name.includes(searchValue)), [data])

  return (
    <div>
      <h1>ArticlesPage</h1>
      {/* {isLoading && <h2>Loading..</h2>}
      {isError && <h2>Oops..{isError}</h2>} */}

      <hr />
      <input type='text' placeholder='filter by name' value={searchValue} onChange={handleSearch} />
      <hr />
      <Formik
        initialValues={{
          articleName: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field name='articleName' placeholder='articleName' />
          <button type='submit'>Create</button>
        </Form>
      </Formik>

      <hr />
      {filteredData && (
        <ul>
          {filteredData.map((el) => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ArticlesPage
