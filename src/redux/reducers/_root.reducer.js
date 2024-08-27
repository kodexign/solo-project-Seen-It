import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import addNewReducer from './addnew.reducer';
import mediaReducer from './media.reducer';
import getStatusesReducer from './getstatuses.reducer';
import threeCurrentReducer from './threecurrent.reducer';
import threeRecentReducer from './threerecentlyadd.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  addNewReducer,
  mediaReducer,
  getStatusesReducer,
  threeCurrentReducer,
  threeRecentReducer,
});

export default rootReducer;
