import React from 'react';
import './User.css';

const User = ({ user }) => {
  return (
    <li className="user-card">
      <h2 className="user-name">{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>

      {/* Address */}
      {user.address && (
        <p><strong>City:</strong> {user.address.city}</p>
      )}

      {/* Company */}
      {user.company && (
        <p><strong>Company:</strong> {user.company.name}</p>
      )}
    </li>
  );
};

export default User;
