import aboutValuesData from "../../data/aboutValuesData";

import "./OurValues.css";

function OurValues(){
    return(
        <>
            <section className="our-values">
                <div className="container">

                    <div className="row">

                        {/* Introduction */}

                        <div className="col-lg-5">

                            <div className="values-intro">

                                <p className="section-eyebrow">
                                    What We Believe
                                </p>

                                <h2>
                                    Good Work
                                    <span>Starts With Purpose.</span>
                                </h2>

                                <p>
                                    We believe great design is more than making
                                    something look good. It should communicate,
                                    solve problems, and create meaningful results.
                                </p>

                                <p>
                                    That's why creativity, quality, collaboration,
                                    and innovation are at the heart of everything
                                    we do.
                                </p>
                            </div>
                        </div>

                        {/* Values */}

                        <div className="col-lg-7">

                            <div className="values-list">
                                {aboutValuesData.map((value)=>(
                                    <article
                                        className="value-item"
                                        key={value.id}
                                    >
                                    
                                    <div className="value-icon">
                                         <i className={`bi ${value.icon}`} aria-hidden="true">

                                         </i>
                                    </div>

                                    <div className="value-number">
                                        {String(value.id).padStart(2, "0")}
                                    </div>

                                    <div className="value-content">

                                        <h3>{value.title}</h3>

                                        <p>{value.description}</p>
                                        
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

export default OurValues