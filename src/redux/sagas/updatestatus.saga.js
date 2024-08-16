import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* updateStatusToCompleted(action) {
  try {
    const { id } =action.payload;
    const response = yield axios.put(`/api/media/update-status-to-completed/${id}`);
    yield put({ type: 'SET_STATUS_COMPLETED', payload: response.data }); //from reducer
    

  } catch (error) {
    console.log('Error setting media to completed:', error);
  }
}

function* deleteMedia(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(`/api/media/${id}`);
    yield put({ type: 'SET_DELETE_MEDIA'}); //from reducer
    

  } catch (error) {
    console.log('Error deleting media:', error);
  }
}

function* updateStatusSaga() {
    yield takeEvery('UPDATE_STATUS_TO_COMPLETED', updateStatusToCompleted);
    yield takeEvery('DELETE_MEDIA', deleteMedia);
  }
export default updateStatusSaga;