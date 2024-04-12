import React from "react";
import './styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from "./UI/navbar/Navbar";
import AppRoutes from "./components/AppRoutes";





function App() {
  
  return (

    <Router>
      <Navbar/>
      <AppRoutes/>
    </Router>
  );
}

export default App;
