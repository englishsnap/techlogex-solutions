import { NavLink } from "react-router-dom";

import aboutCapabilitiesData from "../../data/aboutCapabilitiesData";

import "./Capabilities.css";

function Capabilities(){
    return(
        <>
            <section className="capabilities">
                <div className="container">

                    <div className="row align-items-center">

                        {/* Left Content */}

                        <div className="col-lg-6">

                            <div className="capabilities-content">

                                <p className="section-eyebrow">
                                    Our Capabilities
                                </p>

                                <h2>
                                    What We Can
                                    <span>Create For You.</span>
                                </h2>

                                <p className="capabilities-intro">
                                    From building your brand identity to creating
                                    digital experiences, we bring creative thinking
                                    and technology together to help your business
                                    move forward.
                                </p>

                                <div className="capabilities-list">
                                    {aboutCapabilitiesData.map((capability)=>(
                                        <NavLink
                                            key={capability.id}
                                            to={`/services/${capability.slug}`}
                                            className="capability-item"
                                        >
                                            <span className="capability-number">
                                                {String(capability.id).padStart(2,"0")}
                                            </span>

                                            <span className="capability-title">
                                                {capability.title}
                                            </span>

                                            <span className="capability-arrow" aria-hidden="true">
                                                →
                                            </span>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Image */}

                        <div className="col-lg-6">

                            <div className="capabilities-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85"
                                    alt="Creative design workspace"
                                    className="capabilities-image" 
                                />

                                <div className="capabilities-image-badge">
                                    <span>Creative</span>
                                    <strong>+ Technology</strong>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}

export default Capabilities