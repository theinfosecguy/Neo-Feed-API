import React from 'react';
import {useState} from 'react';
import {getNEOLookup} from '../utils/getData';
import LookupData from './LookupData';

const Lookup = () => {
    const [id, setId] = useState('3542519');
    const [neoLookup, setNeoLookup] = useState({});

    return (
        <div className='lookup-root-container'>
            <input className='lookup-input' type="number" value={id} onChange={(e) => setId(e.target.value)} required />
            <button className='blue-btn' onClick={() => {
                getNEOLookup(id).then(response => {
                !response.isError ? setNeoLookup(response) : setNeoLookup({});
            }) }} disabled={!id}>Click me</button>
            {
                Object.keys(neoLookup).length > 0 && <LookupData data={neoLookup.data} />
            }
        </div>
    )
}

export default Lookup;
