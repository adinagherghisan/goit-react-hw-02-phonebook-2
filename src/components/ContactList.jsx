import React from 'react';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <div>{contact.name}</div>
          <div>{contact.number}</div>
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
