import { useState } from "react";
import {NavLink} from 'react-router-dom';

import "./Portfolio.css";

import fullPortfolioData from "../../data/fullPortfolioData";

function portfolio(){

    const [activeFilter, setActiveFilter] = useState("all")

    const filteredProjects = 

        activeFilter === "all"
            ? fullPortfolioData
            : fullPortfolioData.filter(
                (project) => project.category === activeFilter
            
            );

    const filters = [
        {
            label: "All",
            value: "all",
        },
        {
            label: "Branding",
            value: "branding",
        },
        {
            label: "Graphic Design",
            value: "graphic-design",
        },
        {
            label: "Printing",
            value: "printing",
        },
        {
            label: "Web & Technology",
            value: "web-technology",
        },
      
    ];

    return(
        <main className="portfolio-page">

              {/* ========================================
                Portfolio Hero
            ======================================== */}

            <section className="portfolio-hero">

                <div className="container">

                    <div className="portfolio-hero-content">

                        <p className="section-eyebrow">
                            Our Portfolio
                        </p>

                        <h1>
                            Work That
                            <span>Speaks For Itself.</span>
                        </h1>

                        <p>
                            Explore selected projects created by
                            TechLogex Solutions across branding,
                            design, printing, and technology.
                        </p>

                    </div>
                </div>
            </section>


            {/* ========================================
                Portfolio Projects
            ======================================== */}
            

            <section className="portfolio-page">

                <div className="container">

                    {/* Filters */}

                    <div 
                        className="portfolio-filters"
                        aria-label="Portfolio categories"
                    >
                        {filters.map((filter)=>(

                            <button
                                key={filter.value}
                                type="button"
                                className={
                                    activeFilter === filter.value
                                    ? "portfolio-filter active"
                                    : "portfolio-filter"
                                }
                                onClick={()=>
                                    setActiveFilter(filter.value)
                                }
                            >
                                {filter.label}
                            </button>
                        ))}
                    
                    </div>    

                  
                    <div className="row">

                        {filteredProjects.map((project)=>(

                            <div className="col-md-6 col-lg-4 mb-5" key={project.id}>

                                <article className="portfolio-card">

                                {/* Project Image */}

                                <div className="portfolio-card-image">

                                    <img
                                        src={project.image}
                                        alt={`${project.title} project`}
                                    />

                                    <div className="portfolio-card-overlay">

                                        <NavLink
                                            to={`/portfolio/${project.slug}`}
                                            className="portfolio-view-project"
                                            aria-label={`View ${project.title} project`}
                                        >
                                            View Project

                                            <span aria-hidden="true">
                                                →
                                            </span>
                                        </NavLink>

                                    </div>

                                </div>


                                {/* Project Content */}

                                <div className="portfolio-card-content">

                                    <span className="portfolio-card-category">
                                        {project.categoryLabel}
                                    </span>

                                    <h2>
                                        {project.title}
                                    </h2>

                                    <p>
                                        {project.description}
                                    </p>


                                    {/* Services */}

                                    <div className="portfolio-card-services">

                                        {project.services.map((service) => (

                                            <span key={service}>
                                                {service}
                                            </span>

                                        ))}

                                    </div>


                                    {/* View Project */}

                                    <NavLink
                                        to={`/portfolio/${project.slug}`}
                                        className="portfolio-card-link"
                                    >
                                        View Project

                                        <span aria-hidden="true">
                                            →
                                        </span>
                                    </NavLink>

                                </div>

                            </article>

                            </div>
                        ))}

                    </div>
                </div>
                
            </section>
        </main>
    )
}

export default portfolio;