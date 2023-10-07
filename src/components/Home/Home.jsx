import React from 'react'
import MovieList from '../MovieList/MovieList'
import classes from './Home.module.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/movies/MovieSlice'

const Home = () => {

 
    const dispatch=useDispatch()
    const movies='Stalin'
    const shows='Hitler'

  useEffect(()=>{
    
   dispatch(fetchAsyncMovies( movies))
   dispatch(fetchAsyncShows( shows))
      }, [ dispatch])
  


    return (
    <> 
    < div className ={classes.bannerImg}></div> 
<MovieList/>
</>)
}

export default Home