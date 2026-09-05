import {NavLink} from 'react-router-dom'

import "./AboutCTA.css";


function AboutCTA(){
    return(
        <>
            <section className='about-cta'>

                <div className='container'>

                    <div className='about-cta-inner'>

                        {/* Decorative Icon */}

                        <div className='about-cta-icon' aria-hidden = "true">
                            <i className="bi bi-chat-dots"></i>
                        </div>

                         {/* Content */}

                        <p className='about-cta-eyebrow'>
                            Have a Project in Mind?
                        </p>

                        <h2>
                            Let's Create Something
                            <span>Meaningful Together.</span>
                        </h2>

                        <p className='about-cta-description'>
                            Tell us about your idea and let's explore
                            how TechLogex Solutions can bring it to life.
                        </p>

                         {/* CTA Button */}

                        <NavLink
                            to="/contact"
                            className="about-cta-button"
                        >
                            Let's Talk
                            <span aria-hidden="true">→</span>
                        </NavLink>
                    </div>
                </div>
            </section>            
        </>
    )
}

export default AboutCTA