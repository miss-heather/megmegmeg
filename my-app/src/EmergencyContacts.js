import React, { useState, useContext } from 'react';
import { EmergencyContactsContext } from './EmergencyContactsContext';
import './css/emergencyContacts.css';
import Footer from './Footer';

const EmergencyContacts = () => {
  const { contacts, setContacts, calling911 } = useContext(EmergencyContactsContext);

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
      <p className={`calling-911 ${calling911 ? 'visible' : ''}`}>
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br/>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <br/>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br/>
        <label htmlFor="relationship">Relationship:</label>
        <input
          type="text"
          id="relationship"
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
        />
        <br/>
        <button type="submit">Save Contact</button>
      </form>

      <h3>Saved Contacts:</h3>
      {contacts.length === 0 ? (
        <p>No contacts saved yet.</p>
      ) : (
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <strong>Name:</strong> {contact.name}, <strong>Phone Number:</strong>{' '}
              {contact.phoneNumber}, <strong>Email:</strong> {contact.email},{' '}
              <strong>Relationship:</strong> {contact.relationship}
            </li>
          ))}
        </ul>
      )}
      <Footer />
    </div>
  );
};

export default EmergencyContacts;
