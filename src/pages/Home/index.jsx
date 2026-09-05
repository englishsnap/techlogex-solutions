import CallToAction from "../../components/CallToAction";
import Hero from "../../components/Hero";
import HeroIntroSection from "../../components/HeroIntroSection";
import HeroPortfolioPreview from "../../components/HeroPortfolioPreview";
import HeroServicesPreview from "../../components/HeroServicesPreview";
import WhyChooseUs from "../../components/WhyChooseUs";


function Home(){
    return(
        <>
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