import React from 'react';
//import NavBar from '../src/componentes/navbar/Nav'
import MainOne from './componentes/main_general/main_One/mainOne.jsx';
import MainTwo from '../src/componentes/main_general/main_two/mainTwo.jsx'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<MainOne/>}></Route>
          <Route exact path="/join" element={<MainTwo/>}/>
        </Routes>
    
    </Router>
  );
}

export default App;
