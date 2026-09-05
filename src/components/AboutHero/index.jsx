import { NavLink } from "react-router-dom"
import "./AboutHero.css";

import aboutHeroImg from "../../assets/images/about-hero.png";

function AboutHero(){
    return(
        <>
            <section className="about-hero">
                <div className="container">

                    <div className="row align-item-center">

                        {/* Content */}

                        <div className="col-lg-7">

                            <div className="about-hero-content">

                                <p className="about-hero-eyebrow">
                                    About TechLogex
                                </p>

                                <h1>
                                    We Build Brands
                                    <span>That Matter.</span>
                                </h1>

                                <p className="about-hero-description">
                                    Creative thinking, thoughtful design, and
                                    technology come together to help businesses
                                    build stronger brands and grow.
                                </p>

                                <NavLink 
                                    to="/contact"
                                    className="about-hero-button"
                                >
                                    Let's Talk
                                    <span aria-hidden="true"> →</span>
                                </NavLink>
                            </div>
                        </div>

                        {/* Visual */}

                        <div className="col-lg-5">

                            <div className="about-hero-visual">

                                 <div className="about-hero-box">
                                    <img 
                                        src={aboutHeroImg}
                                        alt="creative"
                                        className="about-hero-img"
                                    />
                                </div>

                                <div className="about-hero-badge">
                                    Creative
                                    <br />
                                    Design
                                    <br />
                                    Technology
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}

export default AboutHero