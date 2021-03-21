import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Destination from './Components/Destination/Destination';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import About from './Components/Services/Services';
import Services from './Components/Services/Services';

export const logContext = createContext()

function App() {
  const [logInfo, setLogInfo] = useState({})
  return (
    <logContext.Provider value={[logInfo, setLogInfo]}>
      <Router >
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/contact'>
            <Navbar />
          </Route>
          <PrivetRoute path='/destination/:vehicleName'>
            <Navbar />
            <Destination />
          </PrivetRoute>
          <PrivetRoute path='/destination'>
            <Navbar />
            <Destination />
          </PrivetRoute>
          <Route path='/login'>
            <Navbar />
            <Login />
          </Route>
          <Route path='*'>
            
          </Route>
        </Switch>
      </Router>
    </logContext.Provider>
  );
}

export default App;
