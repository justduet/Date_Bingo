import React from 'react';
//import Home from './pages/Home';//
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import DateBingo from './components/pages/DateBingo';
import HowTo from './components/pages/HowTo';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Gallery from './components/pages/Gallery';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';


function App() {
  console.log('app is fine');
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/date-bingo' element={<DateBingo/>}/>
          <Route path='/how-to' element={<HowTo/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;


