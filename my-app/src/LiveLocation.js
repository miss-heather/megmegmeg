import React, { useState, useEffect } from 'react';

const LiveLocation = ({ emergencyContacts }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [distance, setDistance] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [engageEmergencyContact, setEngageEmergencyContact] = useState(false);
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [setUpParameters, setSetUpParameters] = useState(false);

  // Function to update the user's location
  const updateLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    // Update the location when the component mounts
    updateLocation();

    // Set interval to update the location at regular intervals (e.g., every 5 seconds)
    const interval = setInterval(updateLocation, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Live Location</h2>
      {latitude && longitude ? (
        <div>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      ) : (
        <p>Loading location...</p>
      )}

      <h3>Set up Location Parameters</h3>
      <label>
        Would you like to set up location parameters?
        <input
          type="checkbox"
          checked={setUpParameters}
          onChange={(e) => setSetUpParameters(e.target.checked)}
        />
      </label>

      {setUpParameters && (
        <div>
          <h3>Tracking Parameters</h3>
          <label>
            Distance (in miles):
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(parseFloat(e.target.value))}
            />
          </label>
          <br />
          <label>
            Accuracy (in miles):
            <input
              type="number"
              value={accuracy}
              onChange={(e) => setAccuracy(parseFloat(e.target.value))}
            />
          </label>

          <br />
          
          <label>
            Engage an emergency contact if the parameters are left?
            <input
              type="checkbox"
              checked={engageEmergencyContact}
              onChange={(e) => setEngageEmergencyContact(e.target.checked)}
            />
          </label>


          {engageEmergencyContact && (
            <div>
              <h3>Emergency Contact Name</h3>
              <input
                type="text"
                value={emergencyContactName}
                onChange={(e) => setEmergencyContactName(e.target.value)}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LiveLocation;
