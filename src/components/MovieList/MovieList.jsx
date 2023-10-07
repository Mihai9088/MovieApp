import React from 'react'
import {useSelector} from 'react-redux'
import {getAllMovies} from '../../redux/movies/MovieSlice'
import MovieCard from '../MovieCard/MovieCard'
import classes from './MovieList.module.css'
import {getAllShows} from '../../redux/movies/MovieSlice'
import Slider from 'react-slick'

const MovieList = () => {
    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)

    let renderMovies = "";
    let renderShows = "";

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    renderMovies = movies.Response === "True"
        ? (
            movies.Search.map((movie, index) => (<MovieCard key={index} data={movie}/>))
        )
        : (
            <div className={classes.moviesError}>
                <h3>{movies.Error}</h3>
            </div>
        );

    renderShows = shows.Response === "True"
        ? (shows.Search.map((movie, index) => (<MovieCard key={index} data={movie}/>)))
        : (
            <div className={classes.moviesError}>
                <h3>{shows.Error}</h3>
            </div>
        );

    return (
        <div className={classes.movieWrapper}>
            <div className={classes.movieList}>
                <h2 className={classes.movieH}>Movies</h2>
                <div className={classes.movieContainer}>
                    {renderMovies}
                </div>
            </div>
            <div className={classes.movieList}>
                <h2 className={classes.movieH}>Shows</h2>
                <div className={classes.movieContainer}>
                    {renderShows}

                </div>
            </div>
        </div>
    );
}

export default MovieList;
