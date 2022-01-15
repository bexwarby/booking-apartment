import "../App.css";
import logo from "../logo.svg";

function Nav() {
    return (
        <div>
            <ul>
                <img src={logo} className="App-logo" alt="logo" />
                <li href="#">Home</li>
                <li href="#">Park</li>
                <li href="#">Rates</li>
                <li href="#">Contact</li>
            </ul>

        </div>
    )
};

export default Nav;