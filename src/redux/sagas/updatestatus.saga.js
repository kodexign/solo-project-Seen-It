import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* updateStatusToCompleted(action) {
  try {
    yield axios.put('/:id/update-status-to-completed', action.payload);
    yield put({ type: 'SET_STATUS_COMPLETED'}); //from reducer
    

  } catch (error) {
    console.log('Error setting media to completed:', error);
  }
}

function* updateStatusSaga() {
    yield takeEvery('UPDATE_STATUS_TO_COMPLETED', updateStatusToCompleted);
  }
export default updateStatusSaga;