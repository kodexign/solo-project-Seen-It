import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


function* fetchMovies(action) {
  const currentStatusId = action.payload.currentStatusId;
  try {
    const response = yield axios.get(`/api/media/movies/${currentStatusId}`);
    console.log(`GET /api/media/movies/${currentStatusId} response`, response.data);
    yield put({ type: 'SET_MEDIA', payload: response.data });
  } catch (error) {
    console.error(`Error fetching /api/media/movies/${currentStatusId}`, error);
    yield put({ type: 'CLEAR_MEDIA' });
    alert('Something went with fetching movies');
  }
}


function* fetchMoviesSaga() {
  yield takeEvery('FETCH_MOVIES', fetchMovies);
}
export default fetchMoviesSaga;