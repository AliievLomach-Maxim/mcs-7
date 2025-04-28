import { useId } from 'react'

const TestForm = ({ save }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const firstName = e.target.elements.firstName.value
    const lastName = e.target.elements.lastName.value
    const result = {
      firstName,
      lastName,
    }
    save(result)
    e.target.reset()
  }
  const firstNameId = useId()
  const lastNameId = useId()

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={firstNameId}>First name</label>
      <input type='text' name='firstName' id={firstNameId} />
      <br />
      <label htmlFor={lastNameId}>Last name</label>
      <input type='text' name='lastName' id={lastNameId} />
      <br />
      <button type='submit'>Save</button>
    </form>
  )
}

export default TestForm
