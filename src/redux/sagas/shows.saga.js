import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* fetchShows(action) {
  const currentStatusId = action.payload.currentStatusId;

    try {
      const response = yield axios.get(`/api/media/${currentStatusId}`);
      console.log(`GET /api/media/movies/${currentStatusId} response`, response.data);
      yield put({ type: 'SET_MEDIA', payload: response.data });
    } catch (error) {
      console.error(`Error fetching /api/media/movies/${currentStatusId}`, error);
      yield put({ type: 'CLEAR_MEDIA'});
      alert('Something went wrong fetching shows,')
    }
  }

//     try {
//       const response = yield axios.get('/api/media/completed-shows');
//       yield put({ type: 'SET_MEDIA', payload: response.data });
//     } catch (error) {
//       console.error('Error fetching completed shows saga', error);
//     }
//   }

//   function* fetchCurrentShows() {
//     try {
//       const response = yield axios.get('/api/media/currently-watching-shows');
//       yield put({ type: 'SET_MEDIA', payload: response.data });
//     } catch (error) {
//       console.error('Error fetching currently watching shows saga', error);
//     }
//   }

//   function* fetchToWatchShows() {
//     try {
//       const response = yield axios.get('/api/media/to-watch-shows');
//       yield put({ type: 'SET_MEDIA', payload: response.data });
//     } catch (error) {
//       console.error('Error fetching to watch shows saga', error);
//     }
//   }
//   function* fetchDNFShows() {
//     try {
//       const response = yield axios.get('/api/media/dnf-shows');
//       yield put({ type: 'SET_MEDIA', payload: response.data });
//     } catch (error) {
//       console.error('Error fetching dnf shows saga', error);
//     }
//   }


  function* fetchShowsSaga() {
    // yield takeEvery('FETCH_COMPLETED_SHOWS', fetchCompletedShows);
    // yield takeEvery('FETCH_CURRENT_SHOWS', fetchCurrentShows);
    // yield takeEvery('FETCH_TO_WATCH_SHOWS', fetchToWatchShows);
    // yield takeEvery('FETCH_DNF_SHOWS', fetchDNFShows);
    yield takeEvery('FETCH_SHOWS', fetchShows);
  }
  export default fetchShowsSaga;