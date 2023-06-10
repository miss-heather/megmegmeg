import React, { useState, useContext } from 'react';
import { EmergencyContactsContext } from './EmergencyContactsContext';

const EmergencyContacts = () => {
  const { contacts, setContacts } = useContext(EmergencyContactsContext);

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [relationship, setRelationship] = useState('');
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new contact object
    const newContact = {
      name,
      phoneNumber,
      email,
      relationship,
    };

    // Save the new contact to the contacts list
    setContacts([...contacts, newContact]);

    // Reset the form fields
    setName('');
    setPhoneNumber('');
    setEmail('');
    setRelationship('');
  };

  const placeholderContact = {
    name: 'John Doe',
    phoneNumber: '555-1234',
    email: 'johndoe@example.com',
    relationship: 'Friend',
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

      <h3>Placeholder Contact:</h3>
      <label>
        Show Placeholder Contact:
        <input
          type="checkbox"
          checked={showPlaceholder}
          onChange={() => setShowPlaceholder(!showPlaceholder)}
        />
      </label>
      {showPlaceholder && (
        <ul>
          <li>
            <strong>Name:</strong> {placeholderContact.name},{' '}
            <strong>Phone Number:</strong> {placeholderContact.phoneNumber},{' '}
            <strong>Email:</strong> {placeholderContact.email},{' '}
            <strong>Relationship:</strong> {placeholderContact.relationship}
          </li>
        </ul>
      )}
    </div>
  );
};

export default EmergencyContacts;

