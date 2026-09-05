import { useState } from "react";
import { NavLink } from 'react-router-dom';

import serviceOfferedData from "../../data/serviceOfferedData"

import "./ServicesList.css";

const filters = [
    {
        id: "all",
        label: "All",
    },
    {
        id: "branding",
        label: "Branding",
    },
    {
        id: "graphic-design",
        label: "Graphic Design",
    },
    {
        id: "printing",
        label: "Printing",
    },
    {
        id: "web-technology",
        label: "Web & Technology",
    },
];


function ServicesList(){

    const [activeFilter, setActiveFilter] = useState("all");

    const filteredServices = 
        activeFilter === "all"
            ? serviceOfferedData
            : serviceOfferedData.filter(
                (service) => service.category === activeFilter
            );


    return(
        <>
            <section className="services-list-section">

                <div className="container">

                    {/* Section Introduction */}

                    <div className="services-list-header">

                        <p className="section-eyebrow">
                            What We Do
                        </p>

                        <h1>
                            Services Designed
                            <span> For Your Growth.</span>
                        </h1>

                        <p>
                            Explore our creative, design, printing, and
                            technology services. Select a category to
                            find the right solution for your business.
                        </p>
                    </div>

                    {/* Filters */}

                    <div className="services-filters" role="group" aria-label="Filter services">
                        {filters.map((filter)=>(

                            <button 
                                key={filter.id}
                                className={
                                    activeFilter === filter.id
                                    ? "service-filter active"
                                    : "service-filter"
                                }
                                onClick={()=> setActiveFilter(filter.id)}
                                aria-pressed={activeFilter === filter.id}
                            >
                                {filter.label}
                            </button>    
                        ))}
                    </div>

                    {/* Service Cards */}

                    <div className="row g-4">

                        {filteredServices.map((service)=>(
                            
                            <div className="col-md-6 col-lg-4" key={service.id}>

                                <article className="service-card">
                                    
                                    {/* Image */}

                                    <div className="service-card-image-wrapper">
                                        <img 
                                            src={service.image}
                                            alt={service.title}
                                            className="service-card-image"
                                        />

                                        <div className="service-card-icon">
                                            <i
                                            className={`bi ${service.icon}`}
                                            aria-hidden="true"
                                        ></i>
                                        </div>
                                    </div>

                                    {/* Content */}

                                    <div className="service-card-content">

                                        <span className="service-card-category">
                                            {service.categoryLabel}
                                        </span>

                                        <h3>{service.title}</h3>

                                        <p>{service.description}</p>

                                        {/* Button */}

                                        <NavLink
                                            to={`/services/${service.slug}`}
                                            className="service-card-link"
                                        >
                                            Learn More
                                        <span aria-hidden="true">
                                            {" "}→
                                        </span>

                                        </NavLink>

                                    </div>

                                </article>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesList