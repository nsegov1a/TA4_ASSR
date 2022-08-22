
import Navbar from './components/Navbar'
import Stores from './components/Stores';

import React from 'react'

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
