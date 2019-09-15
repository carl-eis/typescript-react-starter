import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Router from './router';

const App: FC<any> = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router/>
      </div>
    </Provider>
  );
};

export default App;
