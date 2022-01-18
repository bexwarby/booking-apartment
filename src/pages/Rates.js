import Nav from "../components/Nav";
import '../App.css';

function Rates() {
    return (
        <div>
            <Nav />
            <h1>Rental Rates</h1>
            <div>
                <h1>Short-Term Rental</h1>
                <h3>One to Six Months</h3>
            </div>
            <div>
                <h1>Long-Term Rentals</h1>
                <h3>Twelve Month Contract</h3>
            </div>
            <div>
                <h1>Holiday Rentals</h1>
                <h3>Throughout July and August</h3>
                <p><i>Minimum 2-night stay</i></p>
            </div>
        </div>
    )
};

export default Rates;