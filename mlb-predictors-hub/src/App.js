import React from 'react';
import Navbar from './components/NavBar/NavBar';
import './App.css';
import Home from './components/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HOF from './components/Pages/HOF';
import Injury from './components/Pages/Injury';
import Playoff from './components/Pages/Playoff';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={HOF} />
          <Route path='/products' component={Injury} />
          <Route path='/sign-up' component={Playoff} />
        </Routes>
      </Router>
    </>
  );
}

export default App;