import { HashRouter as Router } from 'react-router-dom';
import './App.css';

import AppRoutes from './Routes'

import ReactGA from 'react-ga'
import ReactChangeRouter from './ReactChangeRouter'

const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID
ReactGA.initialize(TRACKING_ID)

function App() {
  return (
   <>
      <Router>
        <ReactChangeRouter />
        <AppRoutes />
      </Router>
   </>
  );
}

export default App;
