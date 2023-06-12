import React from 'react'

const getData = async () => {
  const res = await fetch('https://api.spaceflightnewsapi.net/v4/articles/')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  console.log('res: ', res)

  return res.json()
}

const ArticleList = () => {


  const [articles, setArticles] = useState([])

  useEffect(async () => {
    const data = await getData()
    setArticles(data)
  }, [])

  console.log("articles: ", articles)


  return (
    <div>ArticleList</div>
  )
}

export default ArticleList