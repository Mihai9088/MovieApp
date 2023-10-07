import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllMovieShowsDetails,
  fetchAsyncMovieShowDetails,
  removeSelectedMovieShow,
} from '../../redux/movies/MovieSlice';
import classes from './MovieDetails.module.css';
import { AiFillStar, AiFillLike, AiFillCalendar } from 'react-icons/ai';
import { BiSolidFilm } from 'react-icons/bi';

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getAllMovieShowsDetails);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMovieShowDetails(imdbID));

    return () => {
      dispatch(removeSelectedMovieShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className={classes.movieSection}>
      {Object.keys(data).length === 0 ? (
        <div className={classes.loadingContainer}>
        <div className={classes.loadingText}>Loading...</div>
        <div className={classes.loadingSpinner}></div>
      </div>
      ) : (
        <>
          <div className={classes.leftSection}>
            <div className={classes.movieTitle}>{data.Title}</div>
            <div className={classes.movieRating}>
              <span>
                IMDB Rating
                <AiFillStar className={classes.detailIcon} />: {data.imdbRating}
              </span>
              <span>
                IMDB Votes
                <AiFillLike className={classes.detailIcon} />: {data.imdbVotes}
              </span>
              <span>
                IMDB Run Time
                <BiSolidFilm className={classes.detailIcon} />: {data.Runtime}
              </span>
              <span>
                Year
                <AiFillCalendar className={classes.detailIcon} />: {data.Year}
              </span>
            </div>
            <div className={classes.moviePlot}>{data.Plot}</div>
            <div className={classes.movieInfo}>
              <span className={classes.mvspan}>Director</span>
              <span>{data.Director}</span>
            </div>
            <div className={classes.movieInfo}>
              <span className={classes.mvspan}>Actors</span>
              <span>{data.Actors}</span>
            </div>
            <div className={classes.movieInfo}>
              <span className={classes.mvspan}>Genres</span>
              <span>{data.Genre}</span>
            </div>
            <div className={classes.movieInfo}>
              <span className={classes.mvspan}>Languages</span>
              <span>{data.Language}</span>
            </div>
            <div className={classes.movieInfo}>
              <span className={classes.mvspan}>Awards</span>
              <span>{data.Awards}</span>
            </div>
          </div>
          <div className={classes.rightSection}>
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
