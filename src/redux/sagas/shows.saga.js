import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchShows(action) {
  const currentStatusId = action.payload.currentStatusId;

    try {
      const response = yield axios.get(`/api/media/shows/${currentStatusId}`);
      console.log(`GET /api/media/shows/${currentStatusId} response`, response.data);
      yield put({ type: 'SET_MEDIA', payload: response.data });
    } catch (error) {
      console.error(`Error fetching /api/media/shows/${currentStatusId}`, error);
      yield put({ type: 'CLEAR_MEDIA'});
      alert('Something went wrong fetching shows,')
    }
  }



  function* fetchShowsSaga() {
    yield takeEvery('FETCH_SHOWS', fetchShows);
  }
  export default fetchShowsSaga;