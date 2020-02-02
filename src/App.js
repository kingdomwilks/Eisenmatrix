import React from 'react';
import './App.css';
import MainContainer from './MainContainer';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <MainContainer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
