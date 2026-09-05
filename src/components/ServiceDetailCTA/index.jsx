import {NavLink} from 'react-router-dom';

import "./ServiceDetailCTA.css";

function ServiceDetailCTA({service}){
    return(
        <>
            <section className='service-detail-cta'>

                <div className='container'>

                    <div className='service-detail-cta-inner'>

                        {/* Decorative Icon */}

                        <div
                            className="service-detail-cta-icon"
                            aria-hidden="true"
                        >
                        <i className={`bi ${service.icon}`}></i>

                        </div>

                        {/* Content */}

                        <div className='service-detail-cta-content'>

                            <p className='section-eyebrow'>
                                Let's Work Together
                            </p>

                            <h2>
                                Ready to Take Your
                                <span>{service.categoryLabel}</span>
                                to the Next Level?
                            </h2>

                            <p>
                                Let's discuss your project and find the right
                                solution for your business.
                            </p>

                            {/* Buttons */}

                            <div className='service-detail-cta-actions'>

                                <NavLink
                                    to="/contact"
                                    className="service-detail-cta-primary"

                                >
                                    Let's Talk
                                <span aria-hidden="true">
                                    →
                                </span>
                                </NavLink>

                                <NavLink
                                    to="/services"
                                    className="service-detail-cta-secondary"
                                >
                                    View All Services
                                </NavLink>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceDetailCTA