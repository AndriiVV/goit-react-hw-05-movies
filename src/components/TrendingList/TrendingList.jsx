
const TrendingList = ({moviesList}) => { 
  return (
    <ul>
      {moviesList.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );

}

export default TrendingList;