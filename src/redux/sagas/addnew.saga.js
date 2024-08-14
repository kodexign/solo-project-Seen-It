import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchStatuses() {
  try {
    const statusResponse = yield axios.get('/api/media/get-all-status');
    yield put({ type: 'SET_ALL_STATUSES', payload: statusResponse.data}); //from reducer
    

  } catch (error) {
    console.log('fetchStatuses error:', error);
  }
}

function* addNew(action) {
  try {
    yield axios.post('/api/media/add-new', action.payload);
    yield put({ type: 'ADD_NEW_MEDIA'}); //from reducer
    

  } catch (error) {
    console.log('Error Adding New Media:', error);
  }
}


function* addNewSaga() {
    yield takeEvery('ADD_NEW', addNew);
    yield takeEvery('FETCH_STATUSES', fetchStatuses);
  }
export default addNewSaga;
