import { useState, useEffect } from "react";
import getMovies from "utils/getMovies";
import MoviesList from "components/MoviesList/MoviesList";


const TrendingToday = () => { 

  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    getMovies('trending/movie/day')
      .then(({ list, totalPages, page }) => {
        console.log("list: ", list);
        console.log("totalPages: ", totalPages);
        console.log("page: ", page);
        setMoviesList([...list]);
        })
      .catch((err) => {
        setError(err.message);
      });
    
  }, []);

  return (
    <>
      {error ? (<p>{error}</p>) : (
        <>
        <p className="TrendingTitle">Trending today</p>
          <MoviesList moviesList={moviesList} />
        </>
        )}
    </>
  );

}

export default TrendingToday;