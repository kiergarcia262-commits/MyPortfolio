import React, { useState } from "react";
import HTMLCERT from '../assets/HTMLCERT.jpg';
import FCCRWD from '../assets/FCCRWD.jpg';

function Certifications() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Array containing your certificate data
    const certificates = [
        { id: 1, title: "HTML", img: HTMLCERT, desc: "Completed a comprehensive course on front-end development, covering HTML, CSS, and JavaScript." },
        { id: 2, title: "CSS", img: HTMLCERT, desc: "Completed a comprehensive course on front-end development, covering HTML, CSS, and JavaScript." },
        { id: 3, title: "JavaScript", img: HTMLCERT, desc: "Completed a comprehensive course on front-end development, covering HTML, CSS, and JavaScript." },
        { id: 4, title: "Responsive Web Design", img: FCCRWD, desc: "Completed a comprehensive course on responsive web design, covering HTML, CSS, and JavaScript." }
    ];

    const prevSlide = () => {
        // Go to previous card, wrap to end if at the start
        setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        // Go to next card, wrap to start if at the end
        setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
    };

    return (
        <section id="certifications" className="container">
            <p className="tnx">Certifications</p>
            
            {/* Outer Slider Wrapper */}
            <div className="slider-container">
                
                {/* Navigation Buttons */}
                <button className="slider-btn prev-btn" onClick={prevSlide}>&#10094;</button>
                <button className="slider-btn next-btn" onClick={nextSlide}>&#10095;</button>

                {/* Viewport mask window */}
                <div className="slider-viewport">
                    {/* The sliding track shifting left dynamically */}
                    <div 
                        className="card-container slider-track" 
                        style={{ transform: `translateX(-${currentIndex * 345}px)` }} // 320px width + 25px gap
                    >
                        {certificates.map((cert) => (
                            <div className="card" key={cert.id}>
                                <img src={cert.img} alt={`${cert.title} Certification`} />
                                <h3>{cert.title}</h3>
                                <p>{cert.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Certifications;