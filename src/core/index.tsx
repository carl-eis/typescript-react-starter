import React, { FC } from 'react';
import { Provider } from 'react-redux';
import Splash from 'components/splash';
import store from './redux/store';

const App: FC<any> = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Splash />
      </div>
    </Provider>
  );
};

export default App;
