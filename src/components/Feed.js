import React from 'react';
import {useState} from 'react';
import {getNEOFeed} from '../utils/getData';
import FeedData from './FeedData';
import Loader from "react-loader-spinner";


const Feed = () => {

    const [date, setDate] = useState({
        startDate: '',
        endDate: ''
    });

    const [loading, setLoading] = useState(false);
    const [neoFeed, setNeoFeed] = useState({});

    return (
        <div className='feed-root-container'>
            <input className='lookup-input' type="date" placeholder='Start Date' onChange={(e) => {
                setDate({
                    ...date,
                    startDate: e.target.value
                })
            }} />

            <input className='lookup-input mt-3' type="date" placeholder='End Date' onChange={(e) => {
                setDate({
                    ...date,
                    endDate: e.target.value
                })
            }} />

            <button className='blue-btn mb-3r' onClick={() => {
                setLoading(true);
                setNeoFeed({});
                getNEOFeed(date.startDate, date.endDate).then(response => {
                !response.isError ? setNeoFeed(response) : setNeoFeed({}); 
                setLoading(false);
                })
            }}>Click me</button>

            {
                loading && <Loader
                type="Grid"
                color="#0058ff"
                height={50}
                width={50}
                className="mt-3r"
              />

            }

            {
                !loading && Object.keys(neoFeed).length > 0 && <FeedData data={neoFeed.data} />
            }

        </div>
    )
}

export default Feed;
