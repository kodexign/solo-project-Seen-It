import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* updateStatus(action) {
  try {
    const { mediaId, updateStatusId, mediaType, currentStatusId } = action.payload;
    yield axios.put(`/api/media/update-status/${mediaId}`);

    if (mediaType === 'movie') {
      yield put({ type: 'FETCH_MOVIES', payload: { currentStatusId } });
    } else if (mediaType === 'show') {
      yield put({ type: 'FETCH_SHOWS', payload: { currentStatusId } });
    }
  } catch (error) {
    console.log('Error setting media to completed:', error);
  }
}

// function* updateStatusToCompleted(action) {
//   try {
//     const { id } =action.payload;
//     const response = yield axios.put(`/api/media/update-status-to-completed/${id}`);
//     yield put({ type: 'SET_STATUS_COMPLETED', payload: response.data }); //from reducer
//     // yield put({ type: 'FETCH_COMPLETED_MOVIES' });
//     // yield put({ type: 'FETCH_COMPLETED_SHOWS' });

//   } catch (error) {
//     console.log('Error setting media to completed:', error);
//   }
// }

// function* updateStatusCurrentlyWatching(action) {
//   try {
//     const { id } =action.payload;
//     const response = yield axios.put(`/api/media//update-status-to-currently_watching/${id}`);
//     yield put({ type: 'SET_STATUS_CURRENTLY_WATCHING', payload: response.data }); //from reducer
//     // yield put({ type: 'FETCH_CURRENT_MOVIES' });
//     // yield put({ type: 'FETCH_CURRENT_SHOWS' });

//   } catch (error) {
//     console.log('Error setting media to currently watching:', error);
//   }
// }

// function* updateStatusToWatch(action) {
//   try {
//     const { id } =action.payload;
//     console.log('id we we are putting:', id);
//     const response = yield axios.put(`/api/media/update-status-to-watch/${id}`);
//     yield put({ type: 'SET_STATUS_TO_WATCH', payload: response.data }); //from reducer
//     // yield put({ type: 'FETCH_CURRENT_MOVIES' });
//     // yield put({ type: 'FETCH_TO_WATCH_SHOWS' });


//   } catch (error) {
//     console.log('Error setting media to to watch:', error);
//   }
// }

// function* updateStatusToDNF(action) {
//   try {
//     const { id } =action.payload;
//     const response = yield axios.put(`/api/media/update-status-to-dnf/${id}`);
//     yield put({ type: 'SET_STATUS_DNF', payload: response.data }); //from reducer
//     // yield put({ type: 'FETCH_DNF_MOVIES' });
//     // yield put({ type: 'FETCH_DNF_SHOWS' });

//   } catch (error) {
//     console.log('Error setting media to did not finish:', error);
//   }
// }

function* deleteMedia(action) {
  try {
    const { mediaId, updateStatusId, mediaType, currentStatusId } = action.payload;
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
  // yield takeEvery('UPDATE_STATUS_TO_COMPLETED', updateStatusToCompleted);
  // yield takeEvery('UPDATE_STATUS_TO_CURRENTLY_WATCHING', updateStatusCurrentlyWatching);
  // yield takeEvery('UPDATE_STATUS_TO_WATCH', updateStatusToWatch);
  // yield takeEvery('UPDATE_STATUS_TO_DNF', updateStatusToDNF);
  yield takeEvery('UPDATE_STATUS', updateStatus);
  yield takeEvery('DELETE_MEDIA', deleteMedia);
}
export default updateStatusSaga;