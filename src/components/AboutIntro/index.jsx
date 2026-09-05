import { NavLink } from 'react-router-dom'

import aboutData from "../../data/aboutData"

import "./AboutIntro.css";

function AboutIntro(){
    return(
        <>
            <section className='about-intro'>
                <div className='container'>

                    <div className='row align-items-center'>

                        {/* Left Side */}

                        <div className='col-lg-5'>
                            <div className='about-intro-heading'>

                                <p className='section-eyebrow'>
                                    {aboutData.eyebrow}
                                </p>

                                <h2>
                                    Creative Thinking.
                                    <span>Purposeful Solutions.</span>
                                </h2>
                            </div>
                        </div>

                        {/* Right Side */}

                        <div className='col-lg-7'>

                            <div className='about-intro-content'>
                                <h3>{aboutData.title}</h3>
                                {aboutData.paragraphs.map((paragraph, index)=>(
                                    <p key={index}>
                                        {paragraph}
                                    </p>
                                ))}

                                <NavLink
                                    to={aboutData.buttonPath}
                                    className="about-intro-button"
                                >
                                    {aboutData.buttonText}
                                    <span aria-hidden="true"> →</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}

export default AboutIntro