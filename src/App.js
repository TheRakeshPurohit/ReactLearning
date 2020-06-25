import React from 'react';
import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <FunctionClick />
      <ClassClick />
      <EventBind /> */}
    {/* <Counter />
    {/* <Message /> */}
{/* 
    <Greet name="Amitabh" heroName="Vijay Dinanath Chauhan">
      <p> this is children props</p>
    </Greet>
    <Greet name="Baburao" heroName="Paresh Raval">
      <button onClick="alert('nothing');">Enter</button>
    </Greet>
    <Greet name="Chandler" heroName="Friends">
      <p> this is children props</p>
    </Greet>
    <Welcome name="Bruce" heroName="Batman"/>
    <Welcome name="Clark" heroName="Superman"/>
    <Welcome name="Diana" heroName="Wonder Woman"/>
    <Hello />  */}
    </div>
  );
}

export default App;
