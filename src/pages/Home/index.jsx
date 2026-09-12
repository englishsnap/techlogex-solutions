import { Helmet } from "react-helmet-async";

import CallToAction from "../../components/CallToAction";
import Hero from "../../components/Hero";
import HeroIntroSection from "../../components/HeroIntroSection";
import HeroPortfolioPreview from "../../components/HeroPortfolioPreview";
import HeroServicesPreview from "../../components/HeroServicesPreview";
import WhyChooseUs from "../../components/WhyChooseUs";


function Home(){
    return(
        <>
            <Helmet>
                <title>Techlogex Solutions | Branding, Design & Digital Solutions</title>
                <meta
                    name="description"
                    content="Techlogex Solutions helps businesses build memorable brands through creative design, professional printing, branding, and modern digital solutions."
/>
            </Helmet>
            <Hero />
            <HeroIntroSection />
            <HeroServicesPreview />
            <WhyChooseUs />
            <HeroPortfolioPreview />
            <CallToAction />
        </>
    )
}

export default Home;