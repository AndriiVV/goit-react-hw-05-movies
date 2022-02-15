import { useState, useEffect } from "react";
import getMovies from "utils/getMovies";
import TrendingList from "components/TrendingList/TrendingList";


const TrendingToday = () => { 

  const [moviesList, setMoviesList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    // const addMovies = () => { 
      getMovies()
        .then(({ list, totalPages, page }) => {
          console.log("list: ", list);
          console.log("totalPages: ", totalPages);
          console.log("page: ", page);
          setMoviesList([...list]);
         })
        .catch((err) => {
          setError(err.message);
        });
    // }
    
    // addMovies();
  }, []);

  return (
    <>
      {error ? (<p>{error}</p>) : (<TrendingList moviesList={moviesList} />)}
    </>
  );

}

export default TrendingToday;