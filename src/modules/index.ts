import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

/* Reducer imports */
import exampleReducer from 'modules/example/reducer';

/* Saga imports */

/* Add all reducers */
const appReducer = combineReducers({
  exampleReducer,
});

/* Run all sagas */
export const rootSaga = function* rootSaga() {
  return yield all([]);
};

export default appReducer;
