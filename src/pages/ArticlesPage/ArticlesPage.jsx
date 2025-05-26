import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createArticleThunk, getArticlesThunk } from '../../store/articles/articlesOps'
import { Field, Form, Formik } from 'formik'

const ArticlesPage = () => {
  const { data, isLoading, isError } = useSelector((state) => state.articles)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getArticlesThunk())
  }, [dispatch])

  const handleSubmit = ({ articleName }, { resetForm }) => {
    dispatch(createArticleThunk({ name: articleName }))
    resetForm()
  }

  return (
    <div>
      <h1>ArticlesPage</h1>
      {isLoading && <h2>Loading..</h2>}
      {isError && <h2>Oops..{isError}</h2>}
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
      {data && (
        <ul>
          {data.map((el) => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ArticlesPage
