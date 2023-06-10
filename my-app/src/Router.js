import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import EmergencyContacts from './EmergencyContacts';
import GPS from './LiveLocation';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/emergency-contacts">Emergency Contacts</Link>
          </li>
          <li>
            <Link to="/gps">Update or Activate GPS</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emergency-contacts" element={<EmergencyContacts />} />
        <Route path="/gps" element={<GPS />} />
      </Routes>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
