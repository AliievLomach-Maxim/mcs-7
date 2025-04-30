import { ErrorMessage, Field, Form, Formik } from 'formik'

import { AiFillApple } from 'react-icons/ai'

import * as Yup from 'yup'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().min(3, 'Min 3').max(8, 'Max 8').required('required!'),
  lastName: Yup.string().min(3).max(8).required(),
  color: Yup.string().oneOf(['red', 'green']).required(),
  size: Yup.number().oneOf([12, 24, 32]).required(),
})

const FormikForm = ({ save }) => {
  const handleSubmit = (values, actions) => {
    save(values)
    actions.resetForm()
  }

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', color: 'red', size: 12 }}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
      validateOnMount={true}
    >
      {({ values, errors, handleChange, handleSubmit }) => {
        console.log('errors', errors)
        return (
          <>
            <Form>
              <label>
                First name
                <Field type='text' name='firstName' className={errors.firstName ? 'error' : ''} />
                <ErrorMessage name='firstName' component='span' className='test' />
              </label>
              <br />
              <label>
                last name
                <input onChange={handleChange} value={values.lastName} name='lastName' />
                {/* <Field className='field' type='text' name='lastName' /> */}
                <ErrorMessage name='lastName' component='span' className='test' />
              </label>
              <br />
              <AiFillApple size={values.size} color={values.color} />
              <br />
              <Field as='select' name='size'>
                <option value={12}>sm</option>
                <option value={24}>md</option>
                <option value={32}>lg</option>
              </Field>
              <br />
              <Field as='select' name='color'>
                <option value='green'>Green</option>
                <option value='red'>Red</option>
              </Field>
              <br />

              {/* <button type='submit'>Save</button> */}
            </Form>
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <hr />
            <button onClick={handleSubmit}>Save</button>
          </>
        )
      }}
    </Formik>
  )
}

export default FormikForm
