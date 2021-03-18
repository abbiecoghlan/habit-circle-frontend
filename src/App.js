// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Circle from './components/Circle';
// import { LayeredCircle } from "./components/LayeredCircle"




function App() {

  const styles = {
    textAlign: "center"
  };

  return (
    <div style={styles}>
     <Circle></Circle>
      {/* <LayeredCircle></LayeredCircle> */}
    </div>
  );
}

export default App;
