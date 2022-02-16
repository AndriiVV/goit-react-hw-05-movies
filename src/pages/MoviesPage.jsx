
import { useEffect, useState } from "react";
import qString from "query-string";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";


import MoviesList from "components/MoviesList/MoviesList";
import getMovies from "utils/getMovies";

const MoviesPage = () => { 

  const history = useHistory();
  const location = useLocation();

  const search = qString.parse(location.search);
  const { query } = search;
  console.log("Query is: ", query);

  const [input, setInput] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => { 
    e.preventDefault();
    if (!input) return;
    // setInput(e.input.value);
    history.push({ pathname: "/movies", search: "?query=" + input });
    
  }

  const handleChange = (e) => { 
    setInput(e.target.value);
  }

  useEffect(() => { 
    query && getMovies('search/movie', query)
      .then(({ list, totalPages, page }) => {
        console.log("list: ", list);
        // console.log("totalPages: ", totalPages);
        // console.log("page: ", page);
        setMoviesList([...list]);
        })
      .catch((err) => {
        setError(err.message);
      });
  }, [query]);

  return (
    <>
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search movies"
          value={input}
          onChange={handleChange}
        />
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
      {error ? (<p>Error is: {error}</p>) : (<MoviesList moviesList={moviesList} />)}

      {/* <Switch>
        <Route path="/movies?query">
          <p>List of movies</p>
          <MoviesList moviesList={moviesList}/>
        </Route>
      </Switch> */}
      
    </>  
  );
}


export default MoviesPage;