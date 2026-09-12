import { Helmet } from "react-helmet-async";

import AboutCTA from "../../components/AboutCTA";
import AboutHero from "../../components/AboutHero";
import AboutIntro from "../../components/AboutIntro";
import AboutCapabilities from "../../components/AboutCapabilities";
import AboutOurProcess from "../../components/AboutOurProcess";
import AboutOurValues from "../../components/AboutOurValues";

function About(){
    return(
        <>
        <Helmet>
            <title>About Techlogex Solutions | Creative & Digital Solutions</title>
                <meta
                    name="description"
                    content="Learn about Techlogex Solutions, our capabilities, creative process, and values in branding, design, printing, and digital solutions."
                />
        </Helmet>

           <AboutHero />
           <AboutIntro />
           <AboutCapabilities />
           <AboutOurProcess />
           <AboutOurValues />
           <AboutCTA />
        </>
    )
}

export default About;