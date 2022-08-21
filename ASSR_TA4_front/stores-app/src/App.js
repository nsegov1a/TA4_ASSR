import React from 'react';
import Navbar from './components/Navbar'
import Stores from './components/Stores';

function App() {

  return (
    <>
      <Navbar brand="Store App"/>
      <div className="container">
        <Stores/>
      </div>
    </>
  );
}

export default App;
