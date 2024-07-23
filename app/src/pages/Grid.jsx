import { useEffect, useState } from 'react'
import Card from '../components/Card'
import './Grid.css'
import axios from 'axios'
import SearchBar from '../components/SearchBar'

const Grid = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])
  const movieImageUrlBase = 'https://image.tmdb.org/t/p/w1280'

  useEffect(()=>{
    setLoading(true)

    axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0cef49dce8d89376c3e98a86a6b88018&page=1&')
    .then(resp => {
      setData(resp.data.results)
      console.log(resp.data.results)
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
      setLoading(false)
    })

  }, [])

  return (
    <div className='cards-grid'>
      <SearchBar />
      {data.map(item => (
        <Card item={item} movieImageUrlBase={movieImageUrlBase}/>
      ))}
    </div>
  )
}

export default Grid