import { NavLink } from "react-router-dom";

import "./ServicesPreview.css";
import heroServicesData from "../../data/heroServicesData"

function ServicesPreview(){
    return(
        <>
            <section className="services-preview">
                <div className="container">

                    {/* Section Header */}

                    <div className="services-preview-header">

                        <p className="section-eyebrow">
                            Our Services
                        </p>

                        <h2 className="section-title">
                            Solutions Designed
                            <span>For Your Business.</span>
                        </h2>

                        <p className="section-description">
                            From branding and creative design to printing and
                            digital development, we provide practical solutions
                            to help your business stand out.
                        </p>
                    </div>


                    {/* Services */}

                    <div className="row g-4">
                        {heroServicesData.map((service)=>(
                            <div className="col-md-6 col-lg-4" key={service.id}>
                                
                                <article className="service-preview-card">

                                    <div className="service-preview-box">
                                        <img 
                                            src={service.img}
                                            className="service-preview-img"
                                            alt={service.title}
                                        />
                                    </div>

                                    <h3>{service.title}</h3>

                                    <p>{service.description}</p>

                                    <NavLink
                                        to={`/services/${service.slug}`}
                                        className="service-read-more"
                                    >
                                        Read More
                                        <span aria-hidden="true"> →</span>
                                    </NavLink>

                                </article>
                            </div>
                        ))}
                    </div>

                    {/* View All */}

                    <div className="services-preview-action">
                        <NavLink
                            to="/services"
                            className="services-view-all"
                        >
                            View All Services
                            <span aria-hidden="true"> →</span>
                        </NavLink>
                    </div>
                </div>
            </section>
        
        </>
    )
}

export default ServicesPreview