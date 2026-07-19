import react from "react";

function Contact() {
    return (
        <section id="contact" className="contact-container">
            <p className="contact-title">Contact</p>
            <div className="contact-info">
            <h2>Contact Me</h2>
            <p>If you have any questions or would like to work together, feel free to reach out!</p>
            <input type="email" placeholder="Your Professional Email" className="email-input" />
            <button className="send-button">Send</button>
            <ul>
                <li>Email: <a href="mailto:kiergarcia262@gmail.com">kiergarcia262@gmail.com</a></li>
            </ul>
            </div>
        </section>
    );
}

export default Contact;