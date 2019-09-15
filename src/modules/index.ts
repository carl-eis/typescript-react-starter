import { combineReducers } from 'redux';

function exampleReducer(state: any, action: any) {
  const { data, type } = action;
  switch(type) {
    default: return state;
  }
}

const appReducer = combineReducers({
  exampleReducer,
});

export default appReducer;
