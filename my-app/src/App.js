// import logo from './logo.svg';
import './App.css';

import NavBar from './Navbar';
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
          
        <NavBar />
        <Routes>
          <Route exact path="/" componenet={Home}/>


        </Routes>
      </Router>
    </>
    
  );
}

export default App;