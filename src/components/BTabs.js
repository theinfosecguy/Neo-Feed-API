import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';

const BTabs = ({Feed, Lookup}) => {
    return (
        <Tabs defaultActiveKey="neoLookup" id="uncontrolled-tab-example" className='mb-3r'>
            <Tab eventKey="neoFeed" title="Nasa Neo FEED API">
            <Feed />
            </Tab>
            <Tab eventKey="neoLookup" title="Nasa Neo Lookup API">
            <Lookup />
            </Tab>
        </Tabs>
    )
}

export default BTabs;
