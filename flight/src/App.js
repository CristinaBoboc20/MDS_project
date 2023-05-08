// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import { getFlights } from './api';
import FlightApp from './components/FlightApp';
import './index.css'
import './components/search.css'
import FlightSearchForm from './components/FlightSearchForm';
import Search from './components/Search';
function App() {
 
  return (
   <div>
    {/* <FlightApp/> */}
    <Search/>
    {/* <FlightSearchForm/> */}
   </div>
  );
}

export default App;
