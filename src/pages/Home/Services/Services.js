import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div id='services'>
            <h2 className='mt-5 text-primary'>Our Services</h2>
            <div className='service-container'>
            {/* <h2>This is Services</h2>   
            {services.length} */}
            {
                services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;