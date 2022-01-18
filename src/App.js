import Nav from './components/Nav.js';
import Home from './pages/Home.js';
import Park from './pages/Park.js';
import Rates from './pages/Rates.js';
import Contact from './pages/Contact.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React from "react";
import './App.css';

function App() {

  /* fetch('http://localhost:8000/')
    .then(response => response.json())
    .then(data => console.log(data)); */

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          {/* Home route via App */}
          <Route exact path="/" element={<Home />} />
          {/* Park page route */}
          <Route path="/park" element={<Park />} />
          {/* Rates page routes */}
          <Route path="/rates" element={<Rates />} />
          {/* Contact page route */}
          <Route path="/contact" element={<Contact />} />
          {/* No match route */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <Nav />
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
