import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { EmergencyContactsProvider } from './EmergencyContactsContext';
import Home from './Home';
import EmergencyContacts from './EmergencyContacts';
import LiveLocation from './LiveLocation';

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
      </ul>
    </nav>
  );
};

const Root = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to the Home Page</h1>

        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emergency-contacts" element={<EmergencyContacts />} />
          <Route path="/gps" element={<LiveLocation />} />
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
