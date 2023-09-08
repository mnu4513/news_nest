import React, { useState } from 'react';
import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';



function App() {

const [mode, setMode] = useState('Light');
const textColor = 'green';
const bgColor = 'black'

  return (
    <div className="App" style={{"color":textColor, "backgroundColor": bgColor}} >
      <Navbar/>
      <News/>

    </div>
  );
};

export default App;