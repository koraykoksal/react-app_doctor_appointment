import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Header } from './components/Header';
import { Doctors } from './components/Doctors';

function App() {
  return (

    <div className="App">
      <Header/>
      <Doctors/>
    </div>


  );
}

export default App;
