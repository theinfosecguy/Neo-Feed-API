import './css/App.css';
import "./css/master.css";
import Lookup from './components/Lookup';
import Feed from './components/Feed';
import { Toaster } from 'react-hot-toast';
import BTabs from './components/BTabs';

function App() {

  return (
    <div className="App">
      <h1>
        NASA NEO <span className="blue-text">Lookup</span> and <span className="blue-text">Feed</span> API
      </h1>
      <BTabs Feed={Feed} Lookup={Lookup} />
      <Toaster />
    </div>
  );
}

export default App;
