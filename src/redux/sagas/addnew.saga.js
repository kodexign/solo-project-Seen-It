import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* addNewSaga(action) {
  try {

    yield put({ type: 'ADD_NEW_MEDIA' });
    yield axios.post('/api/media', action.payload);

  } catch (error) {
    console.log('Error Adding New Media Saga:', error);
  }
}


export default addNewSaga;
