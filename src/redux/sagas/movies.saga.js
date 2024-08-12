import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCompletedMovies() {
    try {
      const response = yield axios.get('/api/media/completed-movies');
      yield put({ type: 'SET_MEDIA', payload: response.data });
    } catch (error) {
      console.error('Error fetching completed movies saga', error);
    }
  }

  function* fetchCurrentMovies() {
    try {
      const response = yield axios.get('/api/media/currently-watching-movies');
      yield put({ type: 'SET_MEDIA', payload: response.data });
    } catch (error) {
      console.error('Error fetching currently watching movies saga', error);
    }
  }

  function* fetchToWatchMovies() {
    try {
      const response = yield axios.get('/api/media/to-watch-movies');
      yield put({ type: 'SET_MEDIA', payload: response.data });
    } catch (error) {
      console.error('Error fetching to watch movies saga', error);
    }
  }
  function* fetchDNFMovies() {
    try {
      const response = yield axios.get('/api/media/dnf-movies');
      yield put({ type: 'SET_MEDIA', payload: response.data });
    } catch (error) {
      console.error('Error fetching dnf movies saga', error);
    }
  }


  function* fetchMoviesSaga() {
    yield takeEvery('FETCH_COMPLETED_MOVIES', fetchCompletedMovies);
    yield takeEvery('FETCH_CURRENT_MOVIES', fetchCurrentMovies);
    yield takeEvery('FETCH_TO_WATCH_MOVIES', fetchToWatchMovies);
    yield takeEvery('FETCH_DNF_MOVIES', fetchDNFMovies);
  }
  export default fetchMoviesSaga;