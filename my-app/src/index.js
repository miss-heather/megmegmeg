import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { EmergencyContactsProvider } from './EmergencyContactsContext';
import './css/emergencyContacts.css';
import './css/Diary.css';
import Home from './Home';
import EmergencyContacts from './EmergencyContacts';
import LiveLocation from './LiveLocation';
import PanicFeatures from './PanicFeatures';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav>
      <div className="header">
        <h1>MeG ~ My eGuardian</h1>
        <div className="actions">
          <p className="new-here">Login Here</p>
          <Link to="/signup">Sign Up/Login</Link>
        </div>
      </div>
      <div className="main-card">
        <h3>Navigation</h3>
        <ul>
          {location.pathname !== '/' && (
            <li>
              <Link to="/" className={!isHomePage ? 'active' : ''}>
                Home
              </Link>
            </li>
          )}
          {location.pathname !== '/emergency-contacts' && (
            <li>
              <Link to="/emergency-contacts" className={location.pathname === '/emergency-contacts' ? 'active' : ''}>
                Emergency Contacts
              </Link>
            </li>
          )}
          {location.pathname !== '/gps' && (
            <li>
              <Link to="/gps" className={location.pathname === '/gps' ? 'active' : ''}>
                Update or Activate GPS
              </Link>
            </li>
          )}
          {location.pathname !== '/panic-features' && (
            <li>
              <Link to="/panic-features" className={location.pathname === '/panic-features' ? 'active' : ''}>
                Panic Features
              </Link>
            </li>
          )}
        </ul>
      </div>
      {(isHomePage || location.pathname === '/') && (
        <div className="diary-card">
          <h3>Meg's Diary</h3>
          <ul>
            <li>
              <Link to="/rideshare">Take a Rideshare?</Link>
            </li>
            <li>
              <Link to="onlineDate">Online Date?</Link>
            </li>
            <li>
              <Link to="/walk">
                Campus or Base? <br /> Just go for a walk?
              </Link>
            </li>
            <li>
              <Link to="/client">Entertaining a Client?</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

const Rideshare = () => {
  return (
    <div>
      <h1>MeG ~ My eGuardian</h1>
    </div>
  );
};

const Root = () => {
  return (
    <Router>
      <div>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emergency-contacts" element={<EmergencyContacts />} />
          <Route path="/gps" element={<LiveLocation />} />
          <Route path="/panic-features" element={<PanicFeatures />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/rideshare" element={<Rideshare />} />
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
