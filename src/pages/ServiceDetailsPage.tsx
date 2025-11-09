import {useParams} from "react-router-dom";
import Service from "../component/Service.tsx";
import {serviceData} from "../utils/servicesData.ts";
import {useEffect, useState} from "react";
import Container from "../component/Container.tsx";

function ServiceDetailsPage() {
    const {id} = useParams();
    const [data, setData] = useState(serviceData[Number(id) - 1]);

    useEffect(() => {
        setData(serviceData[Number(id) - 1]);
    }, [id]);

    if (!data) {
        return <Container className="flex justify-center items-center">
            <h1 className="text-2xl font-bold">Invalid Service id</h1>
        </Container>
    }

    return (
        <Service data={data}/>
    );
}

export default ServiceDetailsPage;