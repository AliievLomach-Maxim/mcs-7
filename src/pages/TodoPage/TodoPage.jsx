import { useDispatch, useSelector } from 'react-redux'
import { changeTodoStatus, createTodo, deleteTodo } from '../../store/todoSlice'
import { nanoid } from '@reduxjs/toolkit'
import { Field, Form, Formik } from 'formik'

const TodoPage = () => {
  const todos = useSelector((state) => {
    console.log('useSelector')
    return state.todo.todos
  })
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }
  const handleChangeStatus = (id) => {
    dispatch(changeTodoStatus(id))
  }
  const handleCreateTodo = (title) => {
    const newTodo = {
      id: nanoid(),
      completed: false,
      title,
    }
    dispatch(createTodo(newTodo))
  }

  return (
    <div>
      <h1>TodoPage</h1>
      <hr />
      <Formik
        initialValues={{ title: '' }}
        onSubmit={(values, { resetForm }) => {
          handleCreateTodo(values.title)
          resetForm()
        }}
      >
        <Form>
          <Field name='title' />
          <button type='submit'>Create</button>
        </Form>
      </Formik>
      <hr />
      <br />
      <br />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => handleChangeStatus(todo.id)}>
              completed:{todo.completed.toString()}
            </button>
            <button onClick={() => handleDelete(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoPage
