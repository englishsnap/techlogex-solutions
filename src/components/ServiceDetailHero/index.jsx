import "./ServiceDetailHero.css";

import { NavLink } from "react-router-dom";

function ServiceDetailHero({service}){
    return(
        <>
            <section className="service-detail-hero">

                <div className="container">

                    <div className="row align-items-center g-5">

                        {/* Content */}

                        <div className="col-lg-6">

                            <div className="service-detail-hero-content">

                                <span className="service-detail-category">
                                     <i
                                    className={`bi ${service.icon}`}
                                    aria-hidden="true">
                                    </i>

                                    {service.categoryLabel}
                                </span>

                                <h1>{service.title}</h1>

                                <p>{service.heroDescription}</p>

                                <NavLink
                                    to="/services"
                                    className="service-detail-hero-button"
                                >
                                    Explore Our Services
                                    <span aria-hidden="true">
                                        →
                                    </span>
                                </NavLink>
                            </div>
                        </div>

                         {/* Image */}

                         <div className="col-lg-6">
                            
                            <div className="service-detail-hero-image-wrapper">

                                <img 
                                    src={service.image}
                                    alt={service.title}
                                    className="service-detail-hero-image"
                                />

                                <div className="service-detail-hero-icon">
                                    <i
                                        className={`bi ${service.icon}`}
                                        aria-hidden="true">
                                </i>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceDetailHero