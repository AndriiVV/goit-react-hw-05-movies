import { useEffect, useState } from "react";
import { Route, Switch, Link, useHistory, useLocation, useParams } from "react-router-dom";

import getMovieDetails from "utils/getMovieDetails";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";


const MovieDetailsPage = () => {

  const history = useHistory();
  const location = useLocation();
  // const match = useRouteMatch();
  const { id } = useParams();
  
  const [movie, setMovie] = useState({});
  const [releaseYear, setReleaseYear] = useState(null);
  const [genres, setGenres] = useState("");

  const handleClick = () => { 
    history.push(location.state.from);
  }

  useEffect(() => { 
    getMovieDetails(id).then((movie) => {
      setMovie({ ...movie });
      const releaseDate = new Date(Date.parse(movie.release_date));
      setReleaseYear(releaseDate.getFullYear());
      setGenres([...movie.genres].map(({name}) => name).join("  "));
    });

  },[id]);

  return (
    <>
      <div className="MovieDetails">
        <div>
          <button type="button" onClick={handleClick}>Go back</button>
          <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster} alt="" className="Poster" />
        </div>
        <div className="MovieCard">
          <p className="MovieTitle">{ movie.title} ({releaseYear})</p>
          <p>User score: {movie.score}%</p>
          <p className="OverviewTitle">Overview</p>
          <p>{movie.overview}</p>
          <p className="GenresTitle">Genres</p>
          <p>{genres}</p>
        </div>
      </div>

      <div className="AdditionalInfo">
        <p className="AdditionalTitle">Additional information</p>

        <nav>
          <ul>
            <li>
              <Link to={{
                pathname: "/movies/" + id + "/cast",
                state: {from: location.state.from},
              }}>Cast</Link>
            </li>
            <li>
              <Link to={{
                pathname: "/movies/" + id + "/reviews",
                state: {from: location.state.from},
              }}>Reviews</Link>
            </li>
          </ul>
        </nav>

      </div>

      <div>
        <Switch>
          <Route path="/movies/:id/cast">
            <Cast id={id}/>
          </Route>
          <Route path="/movies/:id/reviews">
            <Reviews id={id} />
          </Route>
        </Switch>
      </div>
    </>
  );
 }


export default MovieDetailsPage;