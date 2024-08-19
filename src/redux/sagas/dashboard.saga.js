import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchRecentlyAdded() {
    try {
      const response = yield axios.get('/api/media/recently-added');
      yield put({ type: 'SET_THREE_RECENT', payload: response.data });
    } catch (error) {
      console.error('Error fetching 3 currently watching items', error);
    }
  }

  function* fetchThreeCurrent() {
    try {
      const response = yield axios.get('/api/media/three-current');
      yield put({ type: 'SET_THREE_CURRENT', payload: response.data });
    } catch (error) {
      console.error('Error fetching ThreeCurrent saga', error);
    }
  }



  function* fetchDashboardData() {
    yield takeEvery('FETCH_RECENTLY_ADDED', fetchRecentlyAdded);
    yield takeEvery('FETCH_THREE_CURRENT', fetchThreeCurrent);

  }
  export default fetchDashboardData;