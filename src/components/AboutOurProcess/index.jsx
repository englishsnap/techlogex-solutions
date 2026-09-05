import aboutProcessData from '../../data/aboutProcessData';

import "./OurProcess.css";



function OurProcess(){
    return(
        <>
            <section className='our-process'>
                <div className='container'>

                    <div className='row align-items-center'>

                        {/* Process Content */}

                        <div className='col-lg-7'>
                            <div className='process-content'>

                                <p className='section-eyebrow'>
                                    Our Process
                                </p>

                                <h2>
                                    How We Turn Ideas
                                    <span>Into Results.</span>
                                </h2>

                                <p className='process-intro'>
                                    Great work starts with understanding. We follow
                                    a clear and collaborative process that takes your
                                    project from the initial idea to a polished final
                                    result.
                                </p>

                                <div className='process-list'>

                                    {aboutProcessData.map((step)=>(
                                        <article
                                            className='process-item'
                                            key={step.id}
                                        >
                                            <div className='process-icon-wrapper'>
                                                <i className={`bi ${step.icon}`}
                                                aria-hidden="true"
                                                ></i>
                                            </div>

                                            <div className='process-number'>
                                                {String(step.id).padStart(2, "0")}
                                            </div>

                                            <div className='process-item-content'>

                                                <h3>{step.title}</h3>

                                                <p>{step.description}</p>

                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Supporting Image */}

                        <div className='col-lg-5'>

                            <div className='process-image-wrapper'>

                                <img
                                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                                    alt="Creative team collaborating on a project"
                                    className="process-image"
                                />

                                <div className='process-image-card'>

                                    <span className='process-image-card-label'>
                                        From Idea
                                    </span>

                                    <strong>
                                        To Impact.
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurProcess