import { HashRouter as Router } from 'react-router-dom';
import './App.css';

import AppRoutes from './Routes'


function App() {
  return (
   <>
      <Router basename="/mnm-exports">
        <AppRoutes />
      </Router>
   </>
  );
}

export default App;
