import React from 'react';

const FeedData = (props) => {
    const {data} = props;
    const {near_earth_objects} = data;

    return (
        <div>
            {
                Object.keys(near_earth_objects).map((key, index) => {
                    return (
                        <div key={index}>
                            <h1>Date: {key}</h1>
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
                        </div>
                )})
            }
        </div>
    )
}

export default FeedData
