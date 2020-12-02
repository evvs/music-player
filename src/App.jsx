import React from 'react';
import './App.scss';
import Header from './componets/Header';
import Main from './componets/Main';
import Audio from './componets/Audio';
import Libriary from './componets/Libriary';

const App = () => (
  <div className="App">
    <Header />
    <Main />
    <Audio />
    <Libriary />
  </div>
);

export default App;
