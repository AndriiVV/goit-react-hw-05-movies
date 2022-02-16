import { useState, useEffect } from "react";

import getCast from "utils/getCast";

const Cast = ({ id }) => { 

  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(id).then(({ cast }) => {
      setCast([ ...cast ]);
    })
  }, []);

    return (
    <ul className="CastGallery">
      {cast.map(({ id, name, character, profile_path}) => (
        <li key={ id}>
          <img className="CastImg" src={"https://image.tmdb.org/t/p/w500/" + profile_path} alt="" />
          <p className="CastName">{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}

    </ul>
  );
}

export default Cast;