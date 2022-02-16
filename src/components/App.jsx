import { Redirect, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from 'react';

import MainNav from "./MainNav/MainNav";
// import HomePage from "pages/HomePage";
// import MoviesPage from "pages/MoviesPage";
// import MovieDetailsPage from "pages/MovieDetailsPage";

const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));


export const App = () => {

  return (
    <div>
      <MainNav />
      <Suspense fallback={<h1>Page is loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies/:id">
            <MovieDetailsPage />
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};
