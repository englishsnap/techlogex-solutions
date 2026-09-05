import { NavLink } from 'react-router-dom';
import heroPortfolioData from "../../data/heroPortfolioData";

import "./PortfolioPreview.css";

function PortfolioPreview(){
    return(
        <>
            <section className='portfolio-preview'>
                <div className='container'>

                    {/* Section Header */}
                    
                    <div className="portfolio-preview-header">
                        <div>
                            <p className="section-eyebrow">
                                Our Portfolio
                            </p>

                            <h2 className='section-title'>
                                Work That
                                <span>Speaks for Itself.</span>
                            </h2>
                        </div>

                        <p className='portfolio-preview-description'>
                            Explore some of our creative and digital work
                            designed to help businesses build stronger brands.
                        </p>
                    </div>

                    {/* Portfolio Grid */}

                    <div className='row g-4'>
                        {heroPortfolioData.map((project)=>(
                            <div className='col-md-6 col-lg-4' key={project.id}>
                                <article className='portfolio-card'>
                                    <div className='portfolio-image-wrapper'>

                                        <img 
                                            src={project.image}
                                            alt={project.title}
                                            className="portfolio-image"
                                        />
                                    </div>

                                    <div className='portfolio-card-content'>
                                        <p className='portfolio-category'>
                                            {project.category}
                                        </p>

                                        <h3>
                                            {project.title}
                                        </h3>

                                        <p className='portfolio-description'>
                                            {project.description}
                                        </p>

                                        <NavLink 
                                            to={`/portfolio/${project.slug}`}
                                            className="portfolio-read-more"
                                        >
                                            View Project
                                            <span aria-hidden="true"> →</span>
                                        </NavLink>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>


                    {/* View All */}

                    <div className='portfolio-preview-action'>
                        <NavLink
                            to="/portfolio"
                            className="portfolio-view-all">
                                View Full Portfolio
                                <span aria-hidden="true"> →</span>
                            </NavLink>
                    </div>
                </div>
            </section>  
        </>
    )
}


export default PortfolioPreview