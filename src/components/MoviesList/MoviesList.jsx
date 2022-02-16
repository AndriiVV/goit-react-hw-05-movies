import { Link, useLocation } from "react-router-dom";

const MoviesList = ({ moviesList }) => { 
  const location = useLocation();
  return (
    <ul>
      {moviesList.map(({ id, title, popularity }) => (
        <li key={id} onClick={null}>
          <Link to={{
            pathname: "/movies/" + id,
            state: {from: location,},
          }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );

}

export default MoviesList;