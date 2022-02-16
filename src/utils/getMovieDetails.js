import axios from 'axios';

const KEY = '9a389bdbd8352accf5233ce20b48d66b';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>

const setParams = () =>
  (axios.defaults.params = {
    // media_type: 'movie',
    // time_window: 'day',
    // page: 1,
    api_key: KEY,
  });

export default function getMovieDetails(id) {
  setParams();
  return axios
    .get(`movie/${id}`)
    .then(res => {
      console.log('getMovieDetails(id): ', res.data);
      if (!res) {
        throw new Error('No more data!');
      }
      return {
        title: res.data.title,
        release_date: res.data.release_date,
        overview: res.data.overview,
        genres: [...res.data.genres],
        score: res.data.vote_average * 10,
        // homepage: res.data.homepage,
        poster: res.data.poster_path,
      };
    })
    .catch(err => {
      throw err;
    });
}
