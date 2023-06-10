import React, { useState, useContext } from 'react';
import { EmergencyContactsContext } from './EmergencyContactsContext';
import './css/emergencyContacts.css';

const EmergencyContacts = () => {
  const { contacts, setContacts } = useContext(EmergencyContactsContext);

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
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="relationship">Relationship:</label>
        <input
          type="text"
          id="relationship"
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
        />

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
    </div>
  );
};

export default EmergencyContacts;
