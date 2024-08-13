import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


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
  }
export default addNewSaga;
