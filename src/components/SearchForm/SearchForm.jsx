import { Field, Form, Formik } from 'formik'

const SearchForm = ({ search, isDisabled }) => {
  const handleSubmit = (values) => {
    search(values.query)
  }
  return (
    <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
      <Form>
        <Field name='query' />
        <button type='submit' disabled={isDisabled}>
          Search
        </button>
      </Form>
    </Formik>
  )
}

export default SearchForm
