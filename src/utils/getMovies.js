import axios from 'axios';

const KEY = '9a389bdbd8352accf5233ce20b48d66b';
// const API_Request =
//   'https://api.themoviedb.org/3/movie/550?api_key=9a389bdbd8352accf5233ce20b48d66b';
// const API_Token =
//   'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTM4OWJkYmQ4MzUyYWNjZjUyMzNjZTIwYjQ4ZDY2YiIsInN1YiI6IjYyMGJmMGJhZWY5ZDcyMDAxYmE2YmU1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rDqBbEFje1LzMnuCoLeiCW89mNilmztZMlzFF_XWdKQ';

// https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const setParams = query =>
  (axios.defaults.params = {
    // media_type: 'movie',
    // time_window: 'day',
    query,
    page: 1,
    sort_by: 'popularity.desc',
    api_key: KEY,
  });

export default function getMovies(path, query = '') {
  setParams(query);
  return axios
    .get(path)
    .then(res => {
      console.log('res: ', res.data);
      if (!res) {
        throw new Error('No more data!');
      }
      return {
        list: res.data.results,
        totalPages: res.data.total_pages,
        page: res.data.page,
      };
    })
    .catch(err => {
      throw err;
    });
}
