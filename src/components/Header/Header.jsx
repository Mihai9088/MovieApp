import React, { useState } from 'react'
import {BiUser} from 'react-icons/bi'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/movies/MovieSlice'

const Header = () => {

  const [term,setTerm]=useState('')
  const dispatch=useDispatch()

  const submitHandler= (e) =>{
e.preventDefault()
if(term == '')
{
  return alert ('please complete the form')
}
dispatch(fetchAsyncMovies(term))
dispatch(fetchAsyncShows(term))
setTerm('')
  }

  return (
    <div className={classes.header}>
      <Link to='/' className={classes.link}>
      <div className={classes.logo}>Reel<span className={classes.logoSpan}>World</span></div>
      </Link>
      <div className={classes.searchBar}>
  <form onSubmit={submitHandler} className={classes.form}>
    <div className={classes.searchContainer}>
      <BsSearch className={classes.searchIcon} />
      <input type="text" placeholder='Search...' value={term} onChange={(e)=>{setTerm(e.target.value)}} className={classes.input}/>
    </div>
  </form>
</div>

      <div className={classes.userIcon}>
<BiUser className={classes.icon}/>
      </div>
    </div>
  )
}

export default Header