import React, { createContext, useState } from 'react';

export const EmergencyContactsContext = createContext();

export const EmergencyContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  return (
    <EmergencyContactsContext.Provider value={{ contacts, setContacts }}>
      {children}
    </EmergencyContactsContext.Provider>
  );
};
