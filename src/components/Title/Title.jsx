import clsx from 'clsx'
import styles from './Title.module.css'

const Title = ({ children, size }) => {
  const classes = clsx(styles.title, size && styles[size])
  return <h2 className={classes}>{children}</h2>
}

export default Title
