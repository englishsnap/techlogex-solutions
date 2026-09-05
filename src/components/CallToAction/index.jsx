import { NavLink } from 'react-router-dom';
// import portfolioData from "../../data/portfolioData";

import "./CallToAction.css";

function CallToAction(){
    return(
        <>
            <section className='call-to-action'>
                <div className='container'>

                    <div className='cta-content'>
                        
                        <p className='cta-eyebrow'>
                            Have a Project in Mind?
                        </p>

                        <h2>
                            Let's Build Something
                            <span>Great Together.</span>
                        </h2>

                        <p className='cta-description'>
                            Tell us about your idea and let's turn it into
                            something your business can be proud of.
                        </p>

                        <NavLink 
                            to="/contact"
                            className="cta-button"
                        >
                            Let's Talk
                            <span aria-hidden="true"> →</span>
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CallToAction