import "../App.css";
import logo from "../logo.svg";

import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <div>

            <nav className="sticky-top navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <img src={logo} className="App-logo" alt="logo" />
                        {/* Home link */}
                        <NavLink
                            to="/"
                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "red" : ""
                                };
                            }}
                            className="hover nav-link"
                        >
                            Home
                        </NavLink>
                        {/* Park link */}
                        <NavLink
                            to="/park"
                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "red" : ""
                                };
                            }}
                            className="hover nav-link"
                        >
                            Park
                        </NavLink>
                        {/* Rates link */}
                        <NavLink
                            to="/rates"
                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "red" : ""
                                };
                            }}
                            className="hover nav-link"
                        >
                            Rates
                        </NavLink>
                        {/* Contact link */}
                        <NavLink
                            to="/contact"
                            style={({ isActive }) => {
                                return {
                                    display: "block",
                                    margin: "1rem 0",
                                    color: isActive ? "red" : ""
                                };
                            }}
                            className="hover nav-link"
                        >
                            Contact
                        </NavLink>

                    </ul>
                </div>
            </nav >


        </div >
    )
};

export default Nav;