import classes from "./App.module.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";

const routes = [
  {
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    path: "/movie/:imdbID",
    element: <MovieDetails />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

const App = () => {
  return (
    <div className={classes.app}>
      <Router>
        <Header />
        <div className={classes.container}>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
                exact={route.exact}
              />
            ))}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
