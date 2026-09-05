import AboutCTA from "../../components/AboutCTA";
import AboutHero from "../../components/AboutHero";
import AboutIntro from "../../components/AboutIntro";
import AboutCapabilities from "../../components/AboutCapabilities";
import AboutOurProcess from "../../components/AboutOurProcess";
import AboutOurValues from "../../components/AboutOurValues";

function About(){
    return(
        <>
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