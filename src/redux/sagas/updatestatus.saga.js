import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* updateStatusToCompleted(action) {
  try {
    const { id } =action.payload;
    const response = yield axios.put(`/api/media/update-status-to-completed/${id}`);
    yield put({ type: 'SET_STATUS_COMPLETED', payload: response.data }); //from reducer
    // yield put({ type: 'FETCH_TO_WATCH_MOVIES' });
    // yield put({ type: 'FETCH_TO_WATCH_SHOWS' });

  } catch (error) {
    console.log('Error setting media to completed:', error);
  }
}

function* updateStatusCurrentlyWatching(action) {
  try {
    const { id } =action.payload;
    const response = yield axios.put(`/api/media//update-status-to-currently_watching/${id}`);
    yield put({ type: 'SET_STATUS_CURRENTLY_WATCHING', payload: response.data }); //from reducer
    yield put({ type: 'FETCH_TO_WATCH_MOVIES' });
    // yield put({ type: 'FETCH_TO_WATCH_SHOWS' });

  } catch (error) {
    console.log('Error setting media to currently watching:', error);
  }
}

function* updateStatusToWatch(action) {
  try {
    const { id } =action.payload;
    const response = yield axios.put(`/api/media/update-status-to-watch/${id}`);
    yield put({ type: 'SET_STATUS_TO_WATCH', payload: response.data }); //from reducer
    yield put({ type: 'FETCH_TO_WATCH_MOVIES' });
    // yield put({ type: 'FETCH_TO_WATCH_SHOWS' });


  } catch (error) {
    console.log('Error setting media to to watch:', error);
  }
}

function* updateStatusToDNF(action) {
  try {
    const { id } =action.payload;
    const response = yield axios.put(`/api/media/update-status-to-dnf/${id}`);
    yield put({ type: 'SET_STATUS_DNF', payload: response.data }); //from reducer
    yield put({ type: 'FETCH_TO_WATCH_MOVIES' });
    // yield put({ type: 'FETCH_TO_WATCH_SHOWS' });

  } catch (error) {
    console.log('Error setting media to did not finish:', error);
  }
}

function* deleteMedia(action) {
  try {
    const { id } = action.payload;
    const response = yield axios.delete(`/api/media/${id}`);
    yield put({ type: 'SET_DELETE_MEDIA', payload: response.data }); //from reducer
    yield put({ type: 'FETCH_TO_WATCH_MOVIES' });
    // yield put({ type: 'FETCH_TO_WATCH_SHOWS' });

  } catch (error) {
    console.log('Error deleting media:', error);
  }
}

function* updateStatusSaga() {
    yield takeEvery('UPDATE_STATUS_TO_COMPLETED', updateStatusToCompleted);
    yield takeEvery('UPDATE_STATUS_TO_CURRENTLY_WATCHING', updateStatusCurrentlyWatching);
    yield takeEvery('UPDATE_STATUS_TO_WATCH', updateStatusToWatch);
    yield takeEvery('UPDATE_STATUS_TO_DNF', updateStatusToDNF);
    yield takeEvery('DELETE_MEDIA', deleteMedia);
  }
export default updateStatusSaga;