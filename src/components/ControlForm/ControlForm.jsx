import { useId, useState } from 'react'
import { AiFillApple } from 'react-icons/ai'

const defaultState = { firstName: '', lastName: '', color: 'red', size: 12 }

const ControlForm = ({ save }) => {
  const [formState, setFormState] = useState(defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    save(formState)
    setFormState(defaultState)
  }

  //   const handleLastName = ({ target: { value } }) => {
  //     setFormState({ ...formState, lastName: value })
  //   }

  //   const handleFirstName = ({ target: { value } }) => {
  //     setFormState({ ...formState, firstName: value })
  //   }

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'firstName' && value.includes('@')) return
    setFormState({ ...formState, [name]: value })
  }

  const firstNameId = useId()
  const lastNameId = useId()
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={firstNameId}>First name</label>
      <input
        type='text'
        name='firstName'
        id={firstNameId}
        value={formState.firstName}
        onChange={handleChange}
      />
      <br />
      <label htmlFor={lastNameId}>Last name</label>
      <input
        type='text'
        name='lastName'
        id={lastNameId}
        value={formState.lastName}
        onChange={handleChange}
      />
      <br />
      <AiFillApple size={formState.size} color={formState.color} />
      <br />

      <select name='size' value={formState.size} onChange={handleChange}>
        <option value={12}>sm</option>
        <option value={24}>md</option>
        <option value={32}>lg</option>
      </select>
      <br />

      <select name='color' value={formState.color} onChange={handleChange}>
        <option value='green'>Green</option>
        <option value='red'>Red</option>
      </select>
      <br />
      <button type='submit'>Save</button>
    </form>
  )
}

export default ControlForm
