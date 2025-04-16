const Card = ({ elem }) => {
  return (
    <div>
      <h2>{elem.title}</h2>
      <p>{elem.body}</p>
      {/* {elem.id % 2 === 0 ? 'Hello' : ''} */}
      {elem.id % 2 === 0 && 'Hello'}
    </div>
  )
}

export default Card
