import React from 'react'

const LookupData = (props) => {

    const {data} = props;
    const {name, id, nasa_jpl_url, estimated_diameter, designation} = data;

    return (
        <div>
            <h1>Name: {name}</h1>
            <h2>ID: {id}</h2>
            <h2>JPL URL: {nasa_jpl_url}</h2>
            <h2>Designation: {designation}</h2>
            <h2>Minimum Diameter: {estimated_diameter.meters.estimated_diameter_min}</h2>
            <h2>Maximum Diameter: {estimated_diameter.meters.estimated_diameter_max}</h2>
        </div>
    )
}

export default LookupData
