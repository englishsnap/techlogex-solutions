
import "./ServiceOfferings.css";

const offeringIcons = [
    "bi-check2-circle",
    "bi-stars",
    "bi-lightning",
    "bi-grid",
    "bi-pencil-square",
    "bi-layers",
];

function ServiceOfferings({service}){
    return(
        <>
            <section className="service-offerings" id="service-offerings">

                <div className="container">

                    {/* Section Header */}

                    <div className="service-offerings-header">

                        <p className="section-eyebrow">
                            What We Offer
                        </p>

                        <h2>
                            Everything You Need
                            <span>To Move Forward.</span>
                        </h2>

                        <p>
                            Our {service.categoryLabel.toLowerCase()} services
                            are designed to give your business the right
                            tools, creative direction, and professional support.
                        </p>
                    </div>

                    {/* Offerings */}

                    <div className="row g-4">

                        {service.offerings.map((offering, index)=>(

                            <div className="col-sm-6 col-lg-4" key={offering}>
                                
                                <article className="service-offering-card">

                                    <div className="service-offering-icon">
                                        <i
                                        className={`bi ${
                                            offeringIcons[
                                                index % offeringIcons.length
                                            ]
                                        }`}
                                        aria-hidden="true"
                                    ></i>
                                    </div>

                                    <div className="service-offering-content">
                                        
                                        <span className="service-offering-number">
                                            {String(index + 1).padStart(2, 0)}
                                        </span>
                                        
                                        <h3>{offering}</h3>

                                        {/* <p>
                                            Professional solutions tailored
                                            to your business requirements.
                                        </p> */}
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

export default ServiceOfferings