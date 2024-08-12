import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchCompletedShows() {
    try {
      const response = yield axios.get('/api/media/completed-shows');
      yield put({ type: 'SET_MEDIA', payload: response.data });
    } catch (error) {
      console.error('Error fetching completed shows saga', error);
    }
  }

  function* fetchCurrentShows() {
    try {
      const response = yield axios.get('/api/media/currently-watching-shows');
      yield put({ type: 'SET_MEDIA', payload: response.data });
    } catch (error) {
      console.error('Error fetching currently watching shows saga', error);
    }
  }

  function* fetchToWatchShows() {
    try {
      const response = yield axios.get('/api/media/to-watch-shows');
      yield put({ type: 'SET_MEDIA', payload: response.data });
    } catch (error) {
      console.error('Error fetching to watch shows saga', error);
    }
  }
  function* fetchDNFShows() {
    try {
      const response = yield axios.get('/api/media/dnf-shows');
      yield put({ type: 'SET_MEDIA', payload: response.data });
    } catch (error) {
      console.error('Error fetching dnf shows saga', error);
    }
  }


  function* fetchShowsSaga() {
    yield takeEvery('FETCH_COMPLETED_SHOWS', fetchCompletedShows);
    yield takeEvery('FETCH_CURRENT_SHOWS', fetchCurrentShows);
    yield takeEvery('FETCH_TO_WATCH_SHOWS', fetchToWatchShows);
    yield takeEvery('FETCH_DNF_SHOWS', fetchDNFShows);
  }
  export default fetchShowsSaga;