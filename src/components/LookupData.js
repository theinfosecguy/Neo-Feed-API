import React from 'react';
import {Table} from 'react-bootstrap';

const LookupData = (props) => {

    const {data} = props;
    const {name, id, nasa_jpl_url, estimated_diameter, designation} = data;

    const Data = {
        "Name": name,
        ID: id,
        "JPL URL": nasa_jpl_url,
        "Designation": designation,
        "Minimum Diameter": estimated_diameter.meters.estimated_diameter_min,
        "Maximum Diameter": estimated_diameter.meters.estimated_diameter_max
    }

    return (
        <div className='lookup-data mt-3r'>
            <Table striped bordered hover>
                <tbody>
                    {
                        Data && Object.keys(Data).map((key, index) => {
                            return (
                                <tr key={index}>
                                    <td>{key}</td>
                                    <td>{Data[key]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default LookupData
