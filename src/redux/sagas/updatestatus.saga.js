import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* updateStatus(action) {
  try {
    const { mediaId, updateStatusId, mediaType, currentStatusId } = action.payload;
    yield axios.put(`/api/media/update-status/${mediaId}`, { updateStatusId });

    if (mediaType === 'movie') {
      yield put({ type: 'FETCH_MOVIES', payload: { currentStatusId } });
    } else if (mediaType === 'show') {
      yield put({ type: 'FETCH_SHOWS', payload: { currentStatusId } });
    }
  } catch (error) {
    console.log('Error setting media to completed:', error);
  }
}

function* deleteMedia(action) {
  try {
    const { mediaId, mediaType, currentStatusId } = action.payload;

    yield axios.delete(`/api/media/${mediaId}`);

    if (mediaType === 'movie') {
      yield put({ type: 'FETCH_MOVIES', payload: { currentStatusId } });
    } else if (mediaType === 'show') {
      yield put({ type: 'FETCH_SHOWS', payload: { currentStatusId } });
    }

  } catch (error) {
    console.log('Error deleting media:', error);
  }
}

function* updateStatusSaga() {
  yield takeEvery('UPDATE_STATUS', updateStatus);
  yield takeEvery('DELETE_MEDIA', deleteMedia);
}
export default updateStatusSaga;