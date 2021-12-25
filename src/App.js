import './css/App.css';
import "./css/master.css";
import {Tabs, Tab} from 'react-bootstrap';
import Lookup from './components/Lookup';
import Feed from './components/Feed';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className="App">
      <h1>
        NASA NEO <span className="blue-text">Lookup</span> and <span className="blue-text">Feed</span> API
      </h1>
      <Tabs defaultActiveKey="neoLookup" id="uncontrolled-tab-example" className='mb-3r'>
        <Tab eventKey="neoFeed" title="Nasa Neo FEED API">
          <Feed />
        </Tab>
        <Tab eventKey="neoLookup" title="Nasa Neo Lookup API">
          <Lookup />
        </Tab>
      </Tabs>
      <Toaster />
    </div>
  );
}

export default App;
