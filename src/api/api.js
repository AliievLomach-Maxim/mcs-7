import axios from 'axios'

axios.defaults.baseURL = 'http://hn.algolia.com/api/v1'

export const getArticles = async (searchValue, page) => {
  const { data } = await axios(`/search`, {
    params: {
      query: searchValue,
      page,
    },
  })
  return data
}
