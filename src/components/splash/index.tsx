import React, { FC } from 'react';
import logo from 'resources/logo.svg';
import { SplashContainer } from './styles';

const Splash: FC<any> = () => (
  <SplashContainer>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </SplashContainer>
);

export default Splash;
