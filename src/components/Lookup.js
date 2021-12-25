import React from 'react';
import {useState} from 'react';
import {getNEOLookup} from '../utils/getData';
import LookupData from './LookupData';

const Lookup = () => {
    const [id, setId] = useState('3542519');
    const [neoLookup, setNeoLookup] = useState({});
    const [loading, setLoading] = useState(false);

    return (
        <div className='lookup-root-container'>
            <input className='lookup-input' type="number" value={id} onChange={(e) => setId(e.target.value)} required />
            <button className='blue-btn' onClick={() => {
                setLoading(true);
                getNEOLookup(id).then(response => {
                !response.isError ? setNeoLookup(response) : setNeoLookup({});
                setLoading(false);
            }) }} disabled={!id}>Fetch Data</button>
            {
                loading && <div className='loader'>Ho Ho Ho!</div>
            }
            {
                !loading && Object.keys(neoLookup).length > 0 && <LookupData data={neoLookup.data} className="mt-3r" />
            }
        </div>
    )
}

export default Lookup;
