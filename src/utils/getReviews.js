import axios from 'axios';

const KEY = '9a389bdbd8352accf5233ce20b48d66b';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>

const setParams = () =>
  (axios.defaults.params = {
    // media_type: 'movie',
    // time_window: 'day',
    page: 1,
    api_key: KEY,
  });

export default function getReviews(id) {
  setParams();
  return axios
    .get(`movie/${id}/reviews`)
    .then(res => {
      console.log('getMovieDetails(id): ', res);
      if (!res) {
        throw new Error('No more data!');
      }
      return {
        cast: [...res.data.results],
      };
    })
    .catch(err => {
      throw err;
    });
}
