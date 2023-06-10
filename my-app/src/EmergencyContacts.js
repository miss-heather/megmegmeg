import React, { useState, useContext } from 'react';
import { EmergencyContactsContext } from './EmergencyContactsContext';
import './css/emergencyContacts.css';

const EmergencyContacts = () => {
  const { contacts, setContacts, } = useContext(EmergencyContactsContext);

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [relationship, setRelationship] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      name,
      phoneNumber,
      email,
      relationship,
    };

    setContacts([...contacts, newContact]);

    setName('');
    setPhoneNumber('');
    setEmail('');
    setRelationship('');
  };

  return (
    <div>
      <h2>Emergency Contacts</h2>
      <p className="calling-911">
        Calling 911...
      </p>
      <form onSubmit={handleSubmit}>
        {/* Rest of the form code */}
      </form>

      {/* Rest of the code */}
    </div>
  );
};

export default EmergencyContacts;
