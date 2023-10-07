import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../utilities/Api/MovieApi";
import { key } from "../../utilities/Api/MovieKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await MovieApi.get(`?apiKey=${key}&s=${term}&type=movie`);
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await MovieApi.get(`?apiKey=${key}&s=${term}&type=series`);
    return response.data;
  }
);

export const fetchAsyncMovieShowDetails = createAsyncThunk(
  "movies/fetchAsyncMovieShowDetails",
  async (id) => {
    const response = await MovieApi.get(`?apiKey=${key}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  movieShowDetails: {},
};

const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieShow: (state) => {
      state.selectedMovieShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched succesfully ");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("failure ");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fetched succesfully ");
      return { ...state, shows: payload };
    },
    [fetchAsyncMovieShowDetails.fulfilled]: (state, { payload }) => {
      console.log("fetched succesfully ");
      return { ...state, movieShowDetails: payload };
    },
  },
});

export const { removeSelectedMovieShow } = MovieSlice.actions;
export default MovieSlice.reducer;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllMovieShowsDetails = (state) => state.movies.movieShowDetails;
