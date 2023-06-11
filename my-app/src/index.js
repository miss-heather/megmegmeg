import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { EmergencyContactsProvider } from './EmergencyContactsContext';
import './css/emergencyContacts.css';
import './css/Diary.css';
import './css/Rideshare.css';
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

const RidesharePage = () => {
  const [sendToEmergencyContact, setSendToEmergencyContact] = useState(false);
  const [emergencyContact, setEmergencyContact] = useState('');
  const [destinationAddress, setDestinationAddress] = useState('');
  const [parameterRadius, setParameterRadius] = useState('');
  const [images, setImages] = useState([]);
  const [setupLocationParameters, setSetupLocationParameters] = useState(false);
  const [notifyEmergencyContact, setNotifyEmergencyContact] = useState(false);
  const [emergencyContactInfo, setEmergencyContactInfo] = useState('');

  const handleImageUpload = (event) => {
    const files = event.target.files;
    // Handle the uploaded files here, such as sending them to a server or processing them.
    setImages(Array.from(files));
  };

  const handleSendToEmergencyContactChange = (event) => {
    setSendToEmergencyContact(event.target.checked);
  };

  const handleEmergencyContactChange = (event) => {
    setEmergencyContact(event.target.value);
  };

  const handleDestinationAddressChange = (event) => {
    setDestinationAddress(event.target.value);
  };

  const handleParameterRadiusChange = (event) => {
    setParameterRadius(event.target.value);
  };

  const handleSetupLocationParametersChange = (event) => {
    setSetupLocationParameters(event.target.checked);
  };

  const handleNotifyEmergencyContactChange = (event) => {
    setNotifyEmergencyContact(event.target.checked);
  };

  const handleEmergencyContactInfoChange = (event) => {
    setEmergencyContactInfo(event.target.value);
  };

  return (
    <div className="rideshare-page">
      <h3>Ridesharing?</h3>

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" />
        <br/>
      <label htmlFor="username">User Name:</label>
      <input type="text" id="username" />
        <br/>
      <label htmlFor="license">License Plate #:</label>
      <input type="text" id="license" />
        <br/>
      <label htmlFor="color">Color:</label>
      <input type="text" id="color" />
        <br/>
      <label htmlFor="yearMakeModel">Year/Make/Model:</label>
      <input type="text" id="yearMakeModel" />
        <br/>
      <label htmlFor="images">Upload Images:</label>
      <input type="file" id="images" accept="image/*" multiple onChange={handleImageUpload} />
        <br/>

      {images.length > 0 && (
        <div>
          <h4>Uploaded Images:</h4>
          {images.map((image, index) => (
            <div key={index}>
              <img src={URL.createObjectURL(image)} alt={`Uploaded Image ${index + 1}`} />
            </div>
          ))}
        </div>
      )}

      <div>
        <label htmlFor="sendToEmergencyContact">
          Send Rideshare Data to Emergency Contact:
          <input
            type="checkbox"
            id="sendToEmergencyContact"
            checked={sendToEmergencyContact}
            onChange={handleSendToEmergencyContactChange}
          />
        </label>
      </div>

      {sendToEmergencyContact && (
        <div>
          <label htmlFor="emergencyContact">Emergency Contact:</label>
          <input type="text" id="emergencyContact" value={emergencyContact} onChange={handleEmergencyContactChange} />
        </div>
      )}

      <label htmlFor="destinationAddress">Destination Address:</label>
      <input type="text" id="destinationAddress" value={destinationAddress} onChange={handleDestinationAddressChange} />

      <div>
        <label htmlFor="setupLocationParameters">
          Set up Location Parameters for Safe Arrival:
          <input type="checkbox" id="setupLocationParameters" onChange={handleSetupLocationParametersChange} />
        </label>
      </div>

      {setupLocationParameters && (
        <>
          <label htmlFor="parameterRadius">Parameter Radius (in miles):</label>
          <input
            type="number"
            id="parameterRadius"
            value={parameterRadius}
            onChange={handleParameterRadiusChange}
            step="0.1"
            min="0"
          />

          <div>
            <label htmlFor="notifyEmergencyContact">
              Notify Emergency Contact if Destination is not Reached:
              <input
                type="checkbox"
                id="notifyEmergencyContact"
                checked={notifyEmergencyContact}
                onChange={handleNotifyEmergencyContactChange}
              />
            </label>
          </div>

          {notifyEmergencyContact && (
            <div>
              <label htmlFor="emergencyContactInfo">Emergency Contact Info:</label>
              <input
                type="text"
                id="emergencyContactInfo"
                value={emergencyContactInfo}
                onChange={handleEmergencyContactInfoChange}
              />
            </div>
          )}
        </>
      )}

      {!setupLocationParameters && (
        <div style={{ display: 'none' }}>
          <label htmlFor="parameterRadius">Parameter Radius (in miles):</label>
          <input type="number" id="parameterRadius" value={parameterRadius} onChange={handleParameterRadiusChange} />
        </div>
      )}
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
          <Route path="/rideshare" element={<RidesharePage />} />
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
