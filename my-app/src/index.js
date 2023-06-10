import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { EmergencyContactsProvider } from './EmergencyContactsContext';
import Home from './Home';
import EmergencyContacts from './EmergencyContacts';
import LiveLocation from './LiveLocation';
import PanicFeatures from './PanicFeatures'; // Import the PanicFeatures component

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav>
      <ul>
        {!isHome && (
          <li>
            <Link to="/">Home</Link>
          </li>
        )}
        <li>
          <Link to="/emergency-contacts">Emergency Contacts</Link>
        </li>
        <li>
          <Link to="/gps">Update or Activate GPS</Link>
        </li>
        <li> {/* Add the Panic Features link */}
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
          <Route path="/panic-features" element={<PanicFeatures />} /> {/* Add the PanicFeatures component route */}
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <EmergencyContactsProvider> {/* Add the EmergencyContactsProvider component here */}
      <Root />
    </EmergencyContactsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
