import { AiFillAlert } from 'react-icons/ai'
import styles from './Card.module.scss'
import Title from '../Title/Title'
import Container from '../Container/Container'

const Card = ({ elem }) => {
  return (
    <Container>
      <AiFillAlert className={styles.icon} />
      <Title>{elem.title}</Title>
      <p>{elem.body}</p>
      {elem.id % 2 === 0 && 'Hello'}
    </Container>
  )
}

export default Card
