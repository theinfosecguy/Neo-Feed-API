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
                            <Accordion.Item eventKey={index} className="mt-3 mb-3r">
                                <Accordion.Header className={index%2 === 0 ? "accordion-odd-blue": "accordion-even-blue"}>
                                    {key}
                                </Accordion.Header>
                                <Accordion.Body>
                                {
                                    near_earth_objects[key].map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <h5 className="mt-3">Name: {item.name}</h5>
                                                <h6>JPL URL: {item.nasa_jpl_url}</h6>
                                                <h6>Designation: {item.designation}</h6>
                                                <h6>Minimum Diameter: {item.estimated_diameter.meters.estimated_diameter_min}</h6>
                                                <h6>Maximum Diameter: {item.estimated_diameter.meters.estimated_diameter_max}</h6>
                                                <hr/>
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
