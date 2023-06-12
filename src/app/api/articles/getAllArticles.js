const getData = async (limit, offset) => {
  const res = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/?limit=${limit}&offset=${offset}`)
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default getData
