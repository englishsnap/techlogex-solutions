import { NavLink } from "react-router-dom"
import "./Hero.css";

import heroImage from "../../assets/images/2.png";

function Hero(){
    return(
        <>
            <section className="hero">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Hero Content */}

                        <div className="col-lg-6">

                            <p className="hero-eyebrow">
                                Creative Branding, Design & Technology
                            </p>

                            <h1 className="hero-title">
                                We Turn Ideas Into
                                <span> Powerful Brands.</span>
                            </h1>

                            <p className="hero-description">
                                We help businesses build memorable brands through
                                creative design, professional printing, and modern
                                digital solutions.
                            </p>

                            <div className="hero-actions">
                                <NavLink
                                    to="/contact"
                                    className="hero-btn hero-btn-primary"
                                >
                                    Let's Talk
                                </NavLink>

                                <NavLink
                                    to="/services"
                                    className="hero-btn hero-btn-secondary"
                                >
                                    Explore Our Services
                                </NavLink>

                            </div>
                        </div>

                        {/* Hero Visual */}

                        <div className="col-lg-6 hero-image">
                            <div className="hero-visual">
                                <img 
                                    src={heroImage} 
                                    alt="Creative branding and technology solutions" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero