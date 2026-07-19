import React from "react";
import profilePic from "../assets/formal.jpg";

function AboutMe() {
    return (
        <section id="about" className="mt-5">
            <div className="about-text">
            <p className="tnx">About Me</p>
            <h2>Hi, I'm Kier Gabrielle Garcia</h2>
            <p>Software Developer</p>
            <p>
                Hello! I'm a passionate web developer with experience in building responsive and user-friendly web applications.
            </p>
            </div>
            <div className="about-image">
            <img src={profilePic} alt="Kier Gabrielle Garcia" className="profilPic" />
            </div>
        </section>
    );
}

export default AboutMe;
