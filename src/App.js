import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';



function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
