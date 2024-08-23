import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


function* fetchMovies(action) {
  const currentStatusId = action.payload.currentStatusId;
  try {
    const response = yield axios.get(`/api/media/movies/${currentStatusId}`);
    console.log (`GET /api/media/movies/${currentStatusId} response`, response.data);
    yield put({ type: 'SET_MEDIA' , payload: response.data});
  } catch (error) {
    console.error(`Error fetching /api/media/movies/${currentStatusId}`, error);
    yield put ({type: 'CLEAR_MEDIA'});
    alert('Something went with fetching movies');
  }
}

// function* fetchCompletedMovies() {
//     try {
//       const response = yield axios.get('/api/media/completed-movies');
//       yield put({ type: 'SET_MEDIA', payload: response.data });
//     } catch (error) {
//       console.error('Error fetching completed movies saga', error);
//     }
//   }

//   function* fetchCurrentMovies() {
//     try {
//       const response = yield axios.get('/api/media/currently-watching-movies');
//       yield put({ type: 'SET_MEDIA', payload: response.data });
//     } catch (error) {
//       console.error('Error fetching currently watching movies saga', error);
//     }
//   }

//   function* fetchToWatchMovies() {
//     try {
//       const response = yield axios.get('/api/media/to-watch-movies');
//       yield put({ type: 'SET_MEDIA', payload: response.data });
//     } catch (error) {
//       console.error('Error fetching to watch movies saga', error);
//     }
//   }
//   function* fetchDNFMovies() {
//     try {
//       const response = yield axios.get('/api/media/dnf-movies');
//       yield put({ type: 'SET_MEDIA', payload: response.data });
//     } catch (error) {
//       console.error('Error fetching dnf movies saga', error);
//     }
//   }


  function* fetchMoviesSaga() {
    // yield takeEvery('FETCH_COMPLETED_MOVIES', fetchCompletedMovies);
    // yield takeEvery('FETCH_CURRENT_MOVIES', fetchCurrentMovies);
    // yield takeEvery('FETCH_CURRENT_MOVIES', fetchToWatchMovies);
    // yield takeEvery('FETCH_DNF_MOVIES', fetchDNFMovies);
    yield takeEvery ('FETCH_MOVIES', fetchMovies);
  }
  export default fetchMoviesSaga;