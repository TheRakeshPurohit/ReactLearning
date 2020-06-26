import React from 'react';
import './App.css';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';

function App() {
  return (
    <div className="App">
      
      <ErrorBoundry>
      <Hero heroName="Batman" />
      </ErrorBoundry>

      <ErrorBoundry>
      <Hero heroName="Joker"/>
      </ErrorBoundry>
      
      {/* <PortalDemo /> */}
      {/* <FRParentInput  /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Tables/> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent /> */}
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
