import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FeedData = (props) => {
    const {data} = props;
    const {near_earth_objects} = data;

    return (
        <div>
            <Accordion defaultActiveKey="0">
                {   
                    Object.keys(near_earth_objects).map((key, index) => {
                        return (
                            <Accordion.Item eventKey={index} className="mt-3">
                                <Accordion.Header>
                                    {key}
                                </Accordion.Header>
                                <Accordion.Body>
                                {
                                    near_earth_objects[key].map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <h4>Name: {item.name}</h4>
                                                <h5>JPL URL: {item.nasa_jpl_url}</h5>
                                                <h5>Designation: {item.designation}</h5>
                                                <h5>Minimum Diameter: {item.estimated_diameter.meters.estimated_diameter_min}</h5>
                                                <h5>Maximum Diameter: {item.estimated_diameter.meters.estimated_diameter_max}</h5>
                                            </div>
                                        )
                                    })
                                }
                                </Accordion.Body>
                            </Accordion.Item>
                    )})
                }
            </Accordion>
        </div>
    )
}

export default FeedData
