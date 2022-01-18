import Nav from './components/Nav.js';
import Home from './pages/Home.js';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Beautiful apartment next to Parc Estienne d'Orves in Nice.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find Out More
        </a>
      </header>

      <Nav />

      <Home />

    </div>
  );
}

export default App;
