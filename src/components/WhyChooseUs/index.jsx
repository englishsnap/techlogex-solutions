import whyChooseUsData from "../../data/whyChooseUsData";

import "./WhyChooseUs.css";


function WhyChooseUs(){
    return(
        <>
            <section className="why-choose-us">
                <div className="container">

                    <div className="row align-item-center">

                        {/* Section Introduction */}

                        <div className="col-lg-5">

                            <div className="why-choose-us-intro">

                                <p className="section-eyebrow">
                                    Why TechLogex
                                </p>

                                <h2 className="section-title">
                                    Built Around Your
                                    <span>Business Goals.</span>
                                </h2>

                                <p className="why-choose-us-description">
                                    We believe great design should do more than
                                    look good. It should help your business
                                    communicate, connect with customers, and grow.
                                </p>
                            </div>
                        </div>

                        {/* Reasons */}

                        <div className="col-lg-7">

                            <div className="why-choose-us-list">
                                {whyChooseUsData.map((item)=>(
                                    <article className="why-choose-us-item" key={item.id}>
                                        <div className="why-choose-us-number">
                                            {String(item.id).padStart(2, 0)}
                                        </div>

                                        <div className="why-choose-us-content">
                                            <h3>{item.title}</h3>
                                            <p>{item.description}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        
        
        </>
    )
}

export default WhyChooseUs