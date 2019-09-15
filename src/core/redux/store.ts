import { createStore } from 'redux';
// import history from 'core/history';
import appReducer from 'modules';

const store = createStore(appReducer);

export default store;
