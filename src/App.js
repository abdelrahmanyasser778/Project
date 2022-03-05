import React from 'react';
import './App.css';
import {Switch} from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Pages';
import SigninPage from './Pages/Signin';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/signin" element={<SigninPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
