import { useDispatch, useSelector } from 'react-redux'
import { getAllPostsThunk, selectPosts } from '../../store/posts/postSlice'
import { useEffect } from 'react'

const PostsPage = () => {
  const posts = useSelector(selectPosts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPostsThunk())
  }, [dispatch])

  return (
    <div>
      {posts.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </div>
  )
}

export default PostsPage
