const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://dani-flix.herokuapp.com';

export default {
  URL_BACKEND,
};
