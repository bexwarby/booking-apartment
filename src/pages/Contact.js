import Nav from "../components/Nav";
import { useState } from "react";
import '../App.css';

function Contact() {

    /*create state for each input*/
    const [contactName, setContact] = useState(" ");
    const [contactEmail, setEmail] = useState(" ");
    const [textSubmitted, setTextSubmitted] = useState(" ");

 /*    let contactPage = await fetch("http://localhost:8000/contact");
  */    console.log(textSubmitted);

    const handleSubmitButton = async (e) => {
        e.preventDefault();
        const message = await fetch("http://localhost:8000/contact", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contactName: contactName,
                textSubmitted: textSubmitted,
                contactEmail: contactEmail
            }),
        });
        /* Now we have a response */
        console.log(message);
        /* Wait for json() method to parse response data from JSON to plain JS object */
        const data = await message.json();
        console.log(data);
    };
    return (
        <div>
            <Nav />
            {/* <!--Section: Contact --> */}
            <section className="mb-4">

                {/* <!--Section heading--> */}
                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                {/* <!--Section description--> */}
                <p className="text-center w-responsive mx-auto mb-5">
                    Do you have any questions? Please do not hesitate to contact us directly. <br />
                    We will get back to you within 24 hours.
                </p>

                <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form">

                            {/* <!--Grid row--> */}
                            <div className="row">

                                {/* <!--Grid column--> */}
                                {/* Contact Name Input */}
                                <div className="form-group">
                                    <label>Your name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="contactName"
                                        placeholder="Your name"
                                        value={contactName}
                                        onChange={(e) => setContact(e.target.value)}
                                    />
                                </div>
                                {/* <!--Grid column--> */}

                                {/* <!--Grid column--> */}
                                {/* Contact Email Input */}
                                <div className="form-group">
                                    <label for="email">Your email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={contactEmail}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                {/* <!--Grid column--> */}

                            </div>
                            {/* <!--Grid row--> */}

                            {/* <!--Grid row--> */}
                            <div className="row">

                                {/* <!--Grid column--> */}
                                {/* Message Text Input */}
                                <div className="form-group">
                                    <label>Message:</label>
                                    <textarea
                                        className="form-control"
                                        id="textSubmitted"
                                        value={textSubmitted}
                                        placeholder="How can we help you?"
                                        onChange={(e) => setTextSubmitted(e.target.value)}
                                        rows="10"
                                        cols="30"
                                    >
                                    </textarea>
                                </div>
                            </div>
                            {/* <!--Grid row--> */}

                        </form>

                        {/* Submit Button  */}
                        <div className="buttonSubmit">
                            <button
                                type="submit"
                                className="btn btn-block buttonSubmit"
                                onClick={handleSubmitButton}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                    {/* {/* <!--Grid column--> */}

                    {/* {/* <!--Grid column--> */}
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li>
                                <i className="fas fa-female"></i>
                                <p>Rebekah Munoz Warburton</p>
                            </li>
                            <li><i className="fas fa-map-marker-alt"></i>
                                <p>72 av d'Estienne d'Orves, 06000 Nice, France</p>
                            </li>
                            <li><i className="fas fa-phone"></i>
                                <p>+33 695996771 / +44 xxxxxxxx</p>
                            </li>
                            <li><i className="fas fa-envelope"></i>
                                <p>bex.warburton@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    {/* {/* <!--Grid column--> */} */}

                </div>

            </section>
            {/* <!--Section: Contact--> */}
        </div>
    )
};

export default Contact;