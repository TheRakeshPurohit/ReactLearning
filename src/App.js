import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
    <Greet name="Amitabh">
      <p> this is children props</p>
    </Greet>
    <Greet name="Baburao">
      <button onClick="alert('nothing');">Enter</button>
    </Greet>
    <Greet name="Chandler">
      <p> this is children props</p>
    </Greet>
    <Welcome name="Bruce" heroName="Batman"/>
    <Welcome name="Clark" heroName="Superman"/>
    <Welcome name="Diana" heroName="Wonder Woman"/>
    <Hello />
    </div>
  );
}

export default App;
