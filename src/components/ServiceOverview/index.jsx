import "./ServiceOverview.css";

function ServiceOverview({service}){
    return(
        <>
            <section className="service-overview">

                <div className="container">

                    <div className="row align-item-center g-5">

                        {/* Visual */}

                        <div className="col-lg-5">

                            <div className="service-overview-visual">

                                <div className="service-overview-icon">

                                    <i
                                        className={`bi ${service.icon}`}
                                        aria-hidden="true"
                                    >
                                </i>
                                </div>

                                {/* <span className="service-overview-number">
                                    {String(service.id).padStart(2, "0")}
                                </span> */}

                                <span className="service-overview-label">
                                    TechLogex Solutions
                                </span>
                            </div>
                        </div>

                        {/* Content */}

                        <div className="col-lg-7">

                            <div className="service-overview-content">

                                <p className="section-eyebrow">
                                    About This Service
                                </p>

                                <h2>
                                    More Than Just a 
                                    <span>Service.</span>
                                </h2>

                                <p className="service-overview-text">
                                    {service.overview}
                                </p>

                                <div className="service-overview-highlight">
                                    <i
                                    className="bi bi-check-circle"
                                    aria-hidden="true"
                                ></i>

                                <span>
                                    Professional solutions designed
                                    around your business goals.
                                </span>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServiceOverview