import "./ServicesHero.css";

function ServicesHero(){
    return(
        <>
            <section className="services-hero">
                <div className="container">
                    <div className="row align-items-center">

                        {/* Content */}

                        <div className="col-lg-7">
                            <div className="services-hero-content">

                                <p className="section-eyebrow">
                                    Our Services
                                </p>

                                <h1>
                                    Creative Services
                                    <span>Built Around Your Business.</span>
                                </h1>

                                <p className="services-hero-description">
                                    From building your visual identity to creating
                                    digital experiences, TechLogex Solutions combines
                                    creativity, design, printing, and technology to
                                    help businesses communicate and grow.
                                </p>
                            </div>
                        </div>

                        {/* Visual */}

                        <div className="col-lg-5">
                            <div className="services-hero-visual">
                                <img
                                src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85"
                                alt="Creative designer working on a branding project"
                                className="services-hero-image"
                            />

                            <div className="services-hero-badge">
                                <i
                                    className="bi bi-palette"
                                    aria-hidden="true"
                                ></i>
                                <span>
                                    Design
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

export default ServicesHero