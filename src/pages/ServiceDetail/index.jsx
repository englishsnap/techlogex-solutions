import {useParams, Navigate} from 'react-router-dom';

import serviceOfferedData from "../../data/serviceOfferedData";

import ServiceDetailHero from "../../components/ServiceDetailHero"
import ServiceOfferings from '../../components/ServiceOfferings';
import ServiceOverview from '../../components/ServiceOverview';
import ServiceDetailCTA from '../../components/ServiceDetailCTA';

function ServiceDetail(){

    const {slug} = useParams();

    const service = serviceOfferedData.find(
        (item) => item.slug === slug 
    );

    // If the URL doesn't match a service,
    // send the user back to Services.

    if(!service){
        return <Navigate to="/services" replace />
    }

    return(
        <main>
            <ServiceDetailHero service={service}/>

            <ServiceOfferings service={service} />

            <ServiceOverview service={service} />

            <ServiceDetailCTA service={service} />
        </main>
    )
}

export default ServiceDetail