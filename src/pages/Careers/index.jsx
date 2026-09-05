import { NavLink } from "react-router-dom";

import careersBenefitsData from "../../data/careersBenefitsData"; 
import careersJobsData from "../../data/careersJobsData"

import "./Careers.css";

function Careers(){
    return(
        <main className="careers-page">

            {/* ========================================
                Careers Hero
            ======================================== */}

            <section className="careers-hero">

                <div className="container">

                    <div className="careers-hero-content">

                        <p className="section-eyebrow">
                            Careers
                        </p>

                        <h1>
                            Build Something
                            <span>Meaningful With Us.</span>
                        </h1>

                        <p className="careers-hero-description">
                            We are always looking for creative,
                            curious, and passionate people who want
                            to create meaningful digital experiences
                            and help businesses grow.
                        </p>

                        <div className="careers-hero-actions">
                            <a
                                href="#open-positions"
                                className="careers-primary-button"
                            >
                                Explore Open Positions

                                <span aria-hidden="true">
                                    →
                                </span>
                            </a>

                            <NavLink
                                to="/contact"
                                className="careers-secondary-button"
                            >
                                Let's Talk
                            </NavLink>

                        </div>
                    </div>
                </div>
            </section>


            {/* ========================================
                Why Work With Us
            ======================================== */}

            <section className="careers-benefits">

                <div className="container">

                    <div className="careers-section-heading">

                        <p className="section-eyebrow">
                            Why TechLogex?
                        </p>

                        <h2>
                            More Than Just a Job.
                            <span>Build Your Future With Us.</span>
                        </h2>

                        <p>
                            We believe great work happens when talented
                            people have the freedom to learn, create,
                            collaborate, and make an impact.
                        </p>
                    </div>

                    <div className="careers-benefits-grid">

                        {careersBenefitsData.map((benefit)=>(

                        
                        <article className="careers-benefit-card" key={benefit.id}>

                            <div className="careers-benefit-icon">
                                <i
                                    className={`bi ${benefit.icon}`}
                                    aria-hidden="true"
                                ></i>
                            </div>

                            <span className="careers-benefit-number">
                                {benefit.number}
                            </span>

                            <h3>
                                {benefit.title}
                            </h3>

                            <p>
                                {benefit.description}
                            </p>
                        </article>
                        ))}
                    </div>
                </div>
            </section>


        {/* ========================================
            Open Positions
            ======================================== */}

            <section className="careers-positions" id="open-positions">

                <div className="container">

                    <div className="careers-section-heading">

                        <p className="section-eyebrow">
                            Open Positions
                        </p>

                        <h2>
                            Find Your Next
                            <span>Opportunity.</span>
                        </h2>

                        <p>
                            Explore our current opportunities and find
                            a role where your skills, creativity, and
                            ideas can make an impact.
                        </p>
                    </div>

                    <div className="careers-jobs-list">

                        {careersJobsData.map((job)=>(

                            <article
                                className="careers-job-card"
                                key={job.id}
                            >
                                {/* Icon */}

                                <div className="careers-job-icon">
                                    
                                    <i
                                        className={`bi ${job.icon}`}
                                        aria-hidden="true"
                                    ></i>

                                </div>

                                {/* Main Content */}

                                <div className="careers-job-content">

                                    <h3>{job.title}</h3>

                                    <p>{job.description}</p>
                          

                                {/* Job Information */}

                                <div className="careers-job-meta">

                                    <span>
                                        <i
                                            className="bi bi-building"
                                            aria-hidden="true"
                                        ></i>

                                        {job.department}
                                    </span>

                                    <span>
                                        <i
                                            className="bi bi-geo-alt"
                                            aria-hidden="true"
                                        ></i>

                                        {job.location}
                                    </span>

                                    <span>
                                        <i
                                            className="bi bi-clock"
                                            aria-hidden="true"
                                        ></i>

                                        {job.type}
                                    </span>
                                </div>
                            </div>

                            {/* Button */}

                            <div className="careers-job-action">

                                <NavLink
                                    to={`/careers/${job.id}`}
                                    className="careers-job-button"
                                >
                                    View Position
                                    <span aria-hidden="true">
                                        →
                                    </span>
                                </NavLink>

                            </div>

                            </article>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Careers;