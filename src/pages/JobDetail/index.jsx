import {useParams, Navigate, NavLink} from "react-router-dom";

import careersJobsData from "../../data/careersJobsData";

import "./JobDetail.css";


function JobDetail(){

    const { id } = useParams();

     /*
        Find the job that matches
        the URL parameter.
    */

    
    const job = careersJobsData.find(
        
        (item)=> String(item.id) === id

    );

    /*
        If the job doesn't exist,
        return the user to Careers.
    */

    
    if(!job){
        return(
            <Navigate 
                to="/careers" replace
            />
        )
    }

    return(
        <main className="job-detail-page">

            {/* ========================================
                Job Hero
            ======================================== */}

            <section className="job-detail-hero">

                <div className="container">

                    <div className="job-detail-hero-content">

                        <NavLink
                            to="/careers"
                            className="job-detail-back"
                        >
                             <span aria-hidden="true">
                                ←
                            </span>

                            Back to Careers
                        </NavLink>

                        <div className="job-detail-icon">

                            <i
                                className={`bi ${job.icon}`}
                                aria-hidden="true"
                            ></i>

                        </div>

                        <p className="section-eyebrow">
                            {job.department}
                        </p>

                        <h1>{job.title}</h1>

                        <div className="job-detail-meta">

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
                </div>
            </section>

            {/* ========================================
                Job Content
            ======================================== */}


            <section className="job-detail-content">

                <div className="container">

                    <div className="job-detail-layout">

                        {/* Main Content */}

                        <article className="job-detail-main">

                            {/* Description */}

                            <div className="ob-detail-section">

                                <h2>About the Role</h2>

                                <p>{job.description}</p>
                            </div>

                             {/* Responsibilities */}

                             <div className="job-detail-section">

                                <h2>What You'll Do</h2>

                                <ul className="job-detail-list">

                                    {job.responsibilities.map(
                                        (item, index)=>(
                                            
                                            <li key={index}>
                                                <i
                                                    className="bi bi-check2"
                                                    aria-hidden="true"
                                                ></i>

                                                <span>{item}</span>
                                            </li>
                                        )
                                    )}
                                </ul>
                             </div>

                             {/* Requirements */}

                             <div className="job-detail-section">

                                <h2>What We're Looking For</h2>

                                <ul className="job-detail-list">

                                    {job.requirements.map(
                                        (item, index)=>(

                                            <li key={index}>

                                                 <i
                                                    className="bi bi-check2"
                                                    aria-hidden="true"
                                                ></i>

                                                <span>{item}</span>
                                            </li>
                                        )
                                    )}
                                   
                                </ul>
                             </div>


                             {/* Benefits */}

                             <div className="job-detail-section">

                                <h2>What We Offer</h2>

                                <ul className="job-detail-list">

                                    {job.benefits.map(
                                        (item, index)=>(

                                            <li key={index}>
                                                <i
                                                    className="bi bi-check2"
                                                    aria-hidden="true"
                                                ></i>

                                                <span>{item}</span>
                                            </li>
                                        )
                                    )}
                                </ul>
                             </div>
                        </article>

                        {/* Sidebar */}

                        <aside className="job-detail-sidebar">

                            <div className="job-apply-card">

                                <p className="section-eyebrow">
                                    Join Our Team
                                </p>

                                <h2>
                                    Interested in
                                    <span>This Position?</span>
                                </h2>

                                <p>
                                    Send us your resume and
                                    tell us a little about
                                    yourself. We would love
                                    to hear from you.
                                </p>
                                    <a
                                        href={`mailto:techlogexsolutions@gmail.com?subject=${encodeURIComponent(
                                            `Application for ${job.title}`
                                        )}`}
                                        className="job-apply-button"
                                    >
                                        Send Your Resume

                                        <i
                                            className="bi bi-arrow-right"
                                            aria-hidden="true"
                                        ></i>
                                    </a>

                                <div className="job-apply-email">
                                    <i
                                        className="bi bi-envelope"
                                        aria-hidden="true"
                                    ></i>

                                    <span>
                                        techlogexsolutions@gmail.com
                                    </span>
                                </div>
                            </div>
                        </aside>

                    </div>
                </div>
            </section>

             {/* ========================================
                Bottom CTA
            ======================================== */}

            <section className="job-detail-cta">

                <div className="container">

                    <div className="job-detail-cta-inner">

                        <p className="section-eyebrow">
                            Didn't Find the Right Role?
                        </p>

                        <h2>
                            We'd Still Love
                            <span>to Hear From You.</span>
                        </h2>

                        <p>
                            If you believe you can bring
                            something valuable to our team,
                            feel free to send us your resume.
                        </p>


                        <a
                            href="mailto:techlogexsolutions@gmail.com?subject=General%20Job%20Inquiry"
                            className="job-detail-cta-button"
                        >
                            Contact Us

                            <span aria-hidden="true">
                                →
                            </span>
                        </a>

                    </div>

                </div>

            </section>

        </main>
    )
}

export default JobDetail