import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Nav from "./components/Nav";
import Park from "./pages/Park.js";
import Rates from "./pages/Rates.js";
import Contact from "./pages/Contact.js";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      {/* Home route via App */}
      <Route exact path="/" element={<App />} />
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
  </BrowserRouter>,
  rootElement
);
