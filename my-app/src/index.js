import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { EmergencyContactsProvider } from './EmergencyContactsContext';
import './css/emergencyContacts.css';
import Home from './Home';
import EmergencyContacts from './EmergencyContacts';
import LiveLocation from './LiveLocation';
import PanicFeatures from './PanicFeatures';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <ul>
        <h3 className="new-here">New here?</h3>
        </ul>
        <ul>
          <Link to="/signup">Sign Up</Link>
        </ul>
        <ul>
          <Link to="/login">Login</Link>
        </ul>

        <br/>
        
        <li>
          <Link to="/emergency-contacts">Emergency Contacts</Link>
        </li>
        <li>
          <Link to="/gps">Update or Activate GPS</Link>
        </li>
        <li>
          <Link to="/panic-features">Panic Features</Link>
        </li>
      </ul>
    </nav>
  );
};

const Root = () => {
  return (
    <Router>
      <div>
        <h1>MeG ~ My eGuardian</h1>

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emergency-contacts" element={<EmergencyContacts />} />
          <Route path="/gps" element={<LiveLocation />} />
          <Route path="/panic-features" element={<PanicFeatures />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <EmergencyContactsProvider>
      <Root />
    </EmergencyContactsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
