import { useParams, Navigate, NavLink } from "react-router-dom";

import fullPortfolioData from "../../data/fullPortfolioData"

import "./PortfolioDetail.css";


function PortfolioDetail(){

    const { slug } = useParams();

    const project = fullPortfolioData.find(
        (item) => item.slug === slug
    );

    /*
        If the project doesn't exist,
        send the user back to Portfolio.
    */

    if (!project){
        return <Navigate to="/portfolio" replace />
    }



    return(
        <main className='portfolio-detail'>
            
            {/* ========================================
                Hero
            ======================================== */}

            <section className='portfolio-detail-hero'>

                <div className='container'>

                    <div className='portfolio-detail-hero-content'>

                        <NavLink
                            to="/portfolio"
                            className="portfolio-detail-back"
                        >   
                            <span aria-hidden="true">←</span>
                            Back to Portfolio
                        </NavLink>

                        <p className='section-eyebrow'>
                            {project.categoryLabel}
                        </p>

                        <h1>{project.title}</h1>

                        <p>{project.description}</p>

                    </div>
                </div>
            </section>

            {/* ========================================
                Main Project Image
            ======================================== */}


            <section className="portfolio-detail-image-section">

                <div className="container">

                    <div className="portfolio-detail-image">

                        <img 
                            src={project.image}
                            alt={`${project.title} project`}
                        />
                    </div>
                </div>
            </section>

            {/* ========================================
                Project Information
            ======================================== */}


            <section className="portfolio-detail-info">

                <div className="container">

                    <div className="row">

                        {/* Project Overview */}

                        <div className="col-lg-7">

                            <div className="portfolio-detail-overview">

                                <p className="section-eyebrow">
                                    Project Overview
                                </p>

                                <h2>Creating Something</h2>
                                <span>Meaningful.</span>

                                <p>{project.description}</p>

                                <p>
                                    This project demonstrates how
                                    thoughtful design, strategy, and
                                    technology can come together to
                                    create a stronger brand experience.
                                </p>
                            </div>
                        </div>

                        {/* Services */}

                        <div className="col-lg-5">

                            <div className="portfolio-detail-services">

                                <h3>Services Provided</h3>

                                <ul>
                                    {project.services.map((service)=>(

                                        <li key={service}>
                                             <i
                                                className="bi bi-check-circle"
                                                aria-hidden="true"
                                            ></i>

                                            <span>{service}</span>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            
            </section>

             {/* ========================================
                CTA
            ======================================== */}

            <section className="portfolio-detail-cta">
                <div className="container">

                    <div className="portfolio-detail-cta-inner">

                        <p className="section-eyebrow">
                            Have a Project in Mind?
                        </p>

                        <h2>
                            Let's Create Something
                            <span>Great Together.</span>
                        </h2>

                        <p>
                            Tell us about your project and let's
                            explore how TechLogex Solutions can
                            help bring your idea to life.
                        </p>

                          <NavLink
                            to="/contact"
                            className="portfolio-detail-cta-button"
                        >
                            Let's Talk
                            <span aria-hidden="true">→</span>
                        </NavLink>
                    </div>
                </div>
                
            </section>
        
        </main>
    )
}

export default PortfolioDetail