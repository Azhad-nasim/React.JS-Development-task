import React from 'react';
import './App.css';
import Navv from './Components/Navbar/Navv';
import Header from './Components/Header/Header';
import Label from './Components/Label/Label';
import Social from './Components/SocialMedia/Social';
// import Location from './Components/Location/Location';


function App() {
  return (
    <div className="App">
      
      <Navv/>
      <Header/>
      <Label/>
      <Social/>
      {/* <Location/> */}
    </div>
  );
}

export default App;
