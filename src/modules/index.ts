import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

export const rootSaga = function* rootSaga() {
  return yield all([]);
};

const initialState = {};

const exampleReducer = (state: any = initialState, action: any = {}) => {
  const { data, type } = action;
  switch (type) {
    default:
      return state;
  }
};

const appReducer = combineReducers({
  exampleReducer,
});

export default appReducer;
