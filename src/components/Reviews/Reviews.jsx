import { useState, useEffect } from "react";

import getReviews from "utils/getReviews";

const Reviews = ({ id }) => { 

  const [cast, setCast] = useState([]);

  useEffect(() => {
    getReviews(id).then(({ cast }) => {
      setCast([ ...cast ]);
    })
  }, []);

  return (
    <ul className="Reviews">
      {(!cast.length) ? (
        <p>We don't have any reviews for this movie yet...</p>
      ) : (
      cast.map(({ id, author, content}) => (
        <li key={ id}>
          <p className="ReviewAuthor">{author}</p>
          <p>{content}</p>
        </li>
      )))}

    </ul>
  );
}

export default Reviews;