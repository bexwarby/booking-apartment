import { apartment } from '../data.js';
import Room from '../components/Room.js';
import '../App.css';

function Home() {
    return (
        <div>
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
    )
};

export default Home;