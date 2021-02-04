import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from "./components/Navbar"
import Router from './router/Router'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
        <Navbar />
        <Router />
    </main>
  );
}

export default App;
