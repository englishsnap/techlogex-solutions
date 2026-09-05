import introData from "../../data/introData";
import "./IntroSection.css";

function IntroSection(){
    return(
        <>
            <section className="intro-section">
                <div className="container">

                    <div className="intro-header">
                        <p className="section-eyebrow">
                            What We Do
                        </p>

                        <h2 className="section-title">
                            Creative Ideas. Professional Design.
                            <span>Digital Solutions.</span>
                        </h2>

                        <p className="section-description">
                            TechLogex Solutions helps businesses build strong,
                            memorable brands through creative design, professional
                            printing, and modern digital solutions.
                        </p>
                    </div>

                    <div className="row g-4">
                        {introData.map((item)=>(
                            <div className="col-md-4" key={item.number}>
                                <article className="intro-card">
                                    <div className="intro-card-box">
                                        <img src={item.heroImg} 
                                             className="intro-card-img"
                                             alt={item.title}   
                                        
                                        />
                                    </div>

                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default IntroSection