import { Helmet } from "react-helmet-async";

import ServicesHero from "../../components/ServicesHero";
import ServicesList from "../../components/ServicesList";

function Services(){
    return(
        <>
        <Helmet>
                <title>Services | Techlogex Solutions</title>
                <meta
                    name="description"
                    content="Explore Techlogex Solutions' creative design, professional printing, branding, and digital services designed to help businesses build strong brands."
                />
        </Helmet>
            <ServicesHero />
            <ServicesList />
        </>
    )
}

export default Services;