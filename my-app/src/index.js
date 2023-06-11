import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { EmergencyContactsProvider } from './EmergencyContactsContext';
import './css/emergencyContacts.css';
import './css/Diary.css';
import './css/Rideshare.css';
import './css/WalkPage.css';
import './css/Footer.css';
import './css/Header.css';
// import './css/panic.css'
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
      <nav className="custom-header">
      <div className="header">
        <h1>MeG ~ My eGuardian</h1>
        <div className="actions">
          <p className="login-here">Login Here</p>
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
                Panic Button!
              </Link>
            </li>
          )}
        </ul>
      </div>
      </nav>
      {(isHomePage || location.pathname === '/') && (
        <div className="diary-card">
          <h3>Meg's Diary</h3>
          <ul>
            <li>
              <Link to="/rideshare">Taking a Rideshare?</Link>
            </li>
            <li>
              <Link to="/onlineDate">Have a Hot Date?</Link>
            </li>
            <li>
              <Link to="/walk">
                Campus or Base? <br /> Just goin' for a walk?
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
      <input type="text" id="name" required />
      <br />
      <label htmlFor="username">User Name:</label>
      <input type="text" id="username" required />
      <br />
      <label htmlFor="license">License Plate #:</label>
      <input type="text" id="license" required />
      <br />
      <label htmlFor="color">Color:</label>
      <input type="text" id="color" required />
      <br />
      <label htmlFor="yearMakeModel">Year/Make/Model:</label>
      <input type="text" id="yearMakeModel" required />
      <br />
      <label htmlFor="images">Upload Images:</label>
      <input type="file" id="images" accept="image/*" multiple onChange={handleImageUpload} />
      <br />

      {images.length > 0 && (
        <div>
          <h4>Uploaded Images:</h4>
          {images.map((image, index) => (
            <div key={index}>
              <img src={URL.createObjectURL(image)} alt={`Uploaded ${index + 1}`} />
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
      <input
        type="text"
        id="destinationAddress"
        value={destinationAddress}
        onChange={handleDestinationAddressChange}
      />

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
            step="0.01"
            min="0"
          />

          <div>
            <label htmlFor="notifyEmergencyContact">
              Notify Emergency Contact on Safe Arrival:
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
              <textarea
                id="emergencyContactInfo"
                value={emergencyContactInfo}
                onChange={handleEmergencyContactInfoChange}
              ></textarea>
            </div>
          )}
        </>
      )}

      <button type="submit">Submit</button>
    </div>
  );
};

const OnlineDatePage = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [appFoundOn, setAppFoundOn] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [yearMakeModel, setYearMakeModel] = useState('');
  const [images, setImages] = useState([]);
  const [destinationAddress, setDestinationAddress] = useState('');
  const [setRadiusParameter, setSetRadiusParameter] = useState(false);
  const [radius, setRadius] = useState(0);
  const [notifyEmergencyContact, setNotifyEmergencyContact] = useState(false);
  const [emergencyContact, setEmergencyContact] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleAppFoundOnChange = (event) => {
    setAppFoundOn(event.target.value);
  };

  const handleLicensePlateChange = (event) => {
    setLicensePlate(event.target.value);
  };

  const handleYearMakeModelChange = (event) => {
    setYearMakeModel(event.target.value);
  };

  const handleImageUpload = (event) => {
    const files = event.target.files;
    setImages(Array.from(files));
  };

  const handleDestinationAddressChange = (event) => {
    setDestinationAddress(event.target.value);
  };

  const handleSetRadiusParameterChange = (event) => {
    setSetRadiusParameter(event.target.checked);
  };

  const handleRadiusChange = (event) => {
    setRadius(parseInt(event.target.value, 10));
  };

  const handleNotifyEmergencyContactChange = (event) => {
    setNotifyEmergencyContact(event.target.checked);
  };

  const handleEmergencyContactChange = (event) => {
    setEmergencyContact(event.target.value);
  };

  return (
    <div className="online-date-page">
      <h3>Online Dating? Who is this person?</h3>

      <label htmlFor="name">Name they provided:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />
      <br/>
      <label htmlFor="appFoundOn">Which app were they found on?</label>
      <input type="text" id="appFoundOn" value={appFoundOn} onChange={handleAppFoundOnChange} />
      <br/>
      <label htmlFor="userName">What's this winner's User Name?</label>
      <input type="text" id="userName" value={userName} onChange={handleUserNameChange} />
      <br/>
      <label htmlFor="licensePlate">License Plate #:</label>
      <input type="text" id="licensePlate" value={licensePlate} onChange={handleLicensePlateChange} />
      <br/>
      <label htmlFor="yearMakeModel">Year/Make/Model:</label>
      <input type="text" id="yearMakeModel" value={yearMakeModel} onChange={handleYearMakeModelChange} />
      <br/>
      <label htmlFor="images">Upload Images:</label>
      <input type="file" id="images" accept="image/*" multiple onChange={handleImageUpload} />
      <br/>
      {images.length > 0 && (
        <div>
          <h4>Upload App Images:</h4>
          {images.map((image, index) => (
            <div key={index}>
              <img src={URL.createObjectURL(image)} alt={`Uploaded ${index + 1}`} />
            </div>
          ))}
        </div>
      )}

      <label htmlFor="destinationAddress">Destination Address:</label>
      <input type="text" id="destinationAddress" value={destinationAddress} onChange={handleDestinationAddressChange} />
      <br/>
      <label htmlFor="setRadiusParameter">Set Radius Parameter?:</label>
      <input type="checkbox" id="setRadiusParameter" checked={setRadiusParameter} onChange={handleSetRadiusParameterChange} />

      {setRadiusParameter && (
        <div>
          <label htmlFor="radius">Radius (in miles):</label>
          <input type="number" id="radius" value={radius} onChange={handleRadiusChange} />
        </div>
      )}

      {setRadiusParameter && (
        <div>
          <label htmlFor="notifyEmergencyContact">Notify Emergency Contact if parameters are breached?</label>
          <input type="checkbox" id="notifyEmergencyContact" checked={notifyEmergencyContact} onChange={handleNotifyEmergencyContactChange} />
        </div>
      )}

      {notifyEmergencyContact && (
        <div>
          <label htmlFor="emergencyContact">Emergency Contact:</label>
          <input type="text" id="emergencyContact" value={emergencyContact} onChange={handleEmergencyContactChange} />
        </div>
      )}
    </div>
  );
};
export default OnlineDatePage;

const WalkPage = () => {
  const [isWalkingWithSomeone, setIsWalkingWithSomeone] = useState(false);
  const [walkingWithName, setWalkingWithName] = useState('');
  const [uniqueFeatures, setUniqueFeatures] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  return (
    <div>
      <h3>Campus? Military Base?
        <br/>
        Just feel like takin' a stroll?
      </h3>
      <label>
        Are you walking with someone?
        <input
          type="checkbox"
          checked={isWalkingWithSomeone}
          onChange={(e) => setIsWalkingWithSomeone(e.target.checked)}
        />
      </label>
      <br />
      {isWalkingWithSomeone && (
        <div>
          <label>
            Walking with:
            <input
              type="text"
              value={walkingWithName}
              onChange={(e) => setWalkingWithName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Unique features:
            <textarea
              value={uniqueFeatures}
              onChange={(e) => setUniqueFeatures(e.target.value)}
            />
          </label>
        </div>
      )}
      <br />
      <label>
        Upload an image:
        <input type="file" onChange={handleImageUpload} />
      </label>
      <br />
      <div>
        {/* <h4>Summary:</h4>
        <p>Walking with someone: {isWalkingWithSomeone ? 'Yes' : 'No'}</p> */}
        {/* {isWalkingWithSomeone && (
          <div>
            <p>Walking with: {walkingWithName}</p>
            <p>Unique features: {uniqueFeatures}</p>
          </div> */}
        
        {imageFile && (
          <div>
            <p>Image:</p>
            <img src={URL.createObjectURL(imageFile)} alt="Uploaded" />
          </div>
        )}
      </div>
    </div>
  );
};
const WalkedPage = () => {
  const [isWalkingWithSomeone, setIsWalkingWithSomeone] = useState(false);
  const [walkingWithName, setWalkingWithName] = useState('');
  const [uniqueFeatures, setUniqueFeatures] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [enableGPS, setEnableGPS] = useState(false);
  

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleEnableGPSChange = (event) => {
    setEnableGPS(event.target.checked);
  };

  return (
    <div>
      <h3>Campus? Military Base?
        <br/>
        Just feel like takin' a stroll?
      </h3>
      <label>
        Are you walking with someone?
        <input
          type="checkbox"
          checked={isWalkingWithSomeone}
          onChange={(e) => setIsWalkingWithSomeone(e.target.checked)}
        />
      </label>
      <br />
      {isWalkingWithSomeone && (
        <div>
          <label>
            Walking with:
            <input
              type="text"
              value={walkingWithName}
              onChange={(e) => setWalkingWithName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Unique features:
            <textarea
              value={uniqueFeatures}
              onChange={(e) => setUniqueFeatures(e.target.value)}
            />
          </label>
        </div>
      )}
      <br />
      <label>
        Upload an image:
        <input type="file" onChange={handleImageUpload} />
      </label>
      <br />
      <label>
        Enable GPS to track your walk:
        <input
          type="checkbox"
          checked={enableGPS}
          onChange={handleEnableGPSChange}
        />
      </label>
      <br />
      <div>
        {imageFile && (
          <div>
            <p>Image:</p>
            <img src={URL.createObjectURL(imageFile)} alt="Uploaded" />
          </div>
        )}
      </div>
      <br/>
      <button className="emergency">
        <p1>Emergency?
          <br/>
          Call 911!
        </p1>
      </button>
    </div>
  );
};

export { WalkedPage };



const NewClientPage = () => {
  const [clientName, setClientName] = useState('');
  const [uniqueFeatures, setUniqueFeatures] = useState('');
  const [itinerary, setItinerary] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [enableGPS, setEnableGPS] = useState(false);
  const [setParameters, setSetParameters] = useState(false);
  const [address, setAddress] = useState('');
  const [radius, setRadius] = useState('');
  const [contactOnLeave, setContactOnLeave] = useState(false);
  const [emergencyContact, setEmergencyContact] = useState('');
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [engagementTime, setEngagementTime] = useState('');

  const handleClientNameChange = (event) => {
    setClientName(event.target.value);
  };

  const handleUniqueFeaturesChange = (event) => {
    setUniqueFeatures(event.target.value);
  };

  const handleItineraryChange = (event) => {
    setItinerary(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleEnableGPSChange = (event) => {
    const isChecked = event.target.checked;
    setEnableGPS(isChecked);
    // Reset parameters if GPS is unchecked
    if (!isChecked) {
      setSetParameters(false);
      setAddress('');
      setRadius('');
      setContactOnLeave(false);
    }
  };

  const handleSetParametersChange = (event) => {
    setSetParameters(event.target.checked);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleRadiusChange = (event) => {
    setRadius(event.target.value);
  };

  const handleContactOnLeaveChange = (event) => {
    setContactOnLeave(event.target.checked);
  };

  const handleEmergencyContactChange = (event) => {
    setEmergencyContact(event.target.value);
  };

  const handleEmergencyNameChange = (event) => {
    setEmergencyName(event.target.value);
  };

  const handleEmergencyPhoneChange = (event) => {
    setEmergencyPhone(event.target.value);
  };

  const handleEngagementTimeChange = (event) => {
    setEngagementTime(event.target.value);
  };

  return (
    <div>
      <h2>With a Client?</h2>
      <label>
        Client Name:
        <br />
        <input type="text" value={clientName} onChange={handleClientNameChange} />
      </label>
      <br />
      <label>
        Unique identifiable features/tattoos:
        <br />
        <textarea value={uniqueFeatures} onChange={handleUniqueFeaturesChange} />
      </label>
      <br />
      <label>
        Image:
        <br />
        <input type="file" onChange={handleImageUpload} />
      </label>
      {imageFile && (
        <div>
          <img src={URL.createObjectURL(imageFile)} alt="Uploaded" />
        </div>
      )}
      <br/>
      <br/>
      <label>
        Itinerary Timeline:
        <br />
        <textarea value={itinerary} onChange={handleItineraryChange} />
      </label>
      <br />
      <br/>
      <label>
        Enable GPS:
        <input
          type="checkbox"
          checked={enableGPS}
          onChange={handleEnableGPSChange}
        />
      </label>
      {enableGPS && (
        <div>
          <label>
            Set GPS Parameters around final destination?
            <input
              type="checkbox"
              checked={setParameters}
              onChange={handleSetParametersChange}
            />
          </label>
          <br/>
          <br/>
          {setParameters && (
            <div>
              <label>
                Destination Address:
                <br />
                <input type="text" value={address} onChange={handleAddressChange} />
              </label>
              <br />
              <br />
              <label>
                Radius (in miles):
                <br />
                <input type="number" value={radius} onChange={handleRadiusChange} />
              </label>
              <br />
              <br />
              <label>
                If Parameters are left, or are not reached by
                <input
                  type="time"
                  value={engagementTime}
                  onChange={handleEngagementTimeChange}
                />
              </label>
              <label>
                , engage Emergency Contact:
                <input
                  type="checkbox"
                  checked={contactOnLeave}
                  onChange={handleContactOnLeaveChange}
                />
              </label>
              {contactOnLeave && (
                <div>
                  <label>
                    Emergency Contact:
                    <br />
                    <input
                      type="text"
                      value={emergencyContact}
                      onChange={handleEmergencyContactChange}
                    />
                  </label>
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <br />
      {enableGPS && (
        <div>
          {emergencyContact && (
            <div>
              <label>
                Emergency Contact Name:
                <br />
                <input
                  type="text"
                  value={emergencyName}
                  onChange={handleEmergencyNameChange}
                />
              </label>
              <br />
              <label>
                Emergency Contact Phone:
                <br />
                <input
                  type="text"
                  value={emergencyPhone}
                  onChange={handleEmergencyPhoneChange}
                />
              </label>
            </div>
          )}
        </div>
      )}
      <br />
    </div>
  );
};

// export default NewClientPage;
const Footer = () => {
  return (
    <footer className='footer-foot'>
      <p>Questions? Comments? Concerns?
        <br/><a href="mailto: email@email.com">eMail Us</a> || Call Us: 206-666-0666
        <br/>
        Visit Us Online: Twitter || Facebook || TikTok</p>
    </footer>
  );
};

const App = () => {
  return (
    <Router>
      <EmergencyContactsProvider>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/emergency-contacts" element={<EmergencyContacts />} />
            <Route path="/gps" element={<LiveLocation />} />
            <Route path="/panic-features" element={<PanicFeatures />} />
            <Route path="/rideshare" element={<RidesharePage />} />
            <Route path="/onlineDate" element={<OnlineDatePage />} />
            <Route path="/walk" element={<WalkedPage />} />
            <Route path="/client" element={<NewClientPage />} />
          </Routes>
          <Footer />
        </div>
      </EmergencyContactsProvider>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
