import { apartment } from './data.js';
import Room from './components/Room.js';
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

      <h1>The Apartment</h1>

      {apartment.map(room => (
        <Room
          key={room.id}
          name={room.name}
          description={room.description}
          image={room.image}
        />
      ))}

    </div>
  );
}

export default App;
