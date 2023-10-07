import React from 'react'
import classes from './MvoieCard.module.css'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
const{data}=props

  return (
    <div className={classes.cardItem}>
      <Link to={`/movie/${data.imdbID}`}>
      <div className={classes.cardInner}>
        <div className={classes.cardTop}>
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className={classes.cardBottom}>
          <div className={classes.cardInfo}>
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default MovieCard