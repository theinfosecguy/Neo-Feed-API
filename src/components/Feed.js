import React from 'react';
import {useState} from 'react';
import {getNEOFeed} from '../utils/getData';
import FeedData from './FeedData';
var format = require('date-format');


const Feed = () => {

    const [date, setDate] = useState({
        startDate: '',
        endDate: ''
    });

    const [neoFeed, setNeoFeed] = useState({});

    return (
        <div className='feed-root-container'>
            <input type="date" placeholder='Start Date' onChange={(e) => {
                setDate({
                    ...date,
                    startDate: e.target.value
                })
            }} />

            <input type="date" placeholder='End Date' onChange={(e) => {
                setDate({
                    ...date,
                    endDate: e.target.value
                })
            }} />

            <button onClick={() => {
                setNeoFeed({});
                getNEOFeed(date.startDate, date.endDate).then(response => {
                !response.isError ? setNeoFeed(response) : setNeoFeed({}); 
                })
            }}>Click me</button>

            {
                Object.keys(neoFeed).length > 0 && <FeedData data={neoFeed.data} />
            }

        </div>
    )
}

export default Feed;