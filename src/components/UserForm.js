import React, { useState, useEffect } from "react";

const UserForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { name, address };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setName("");
    setAddress("");
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>

      <h3>Registered Users</h3>
      <ul>
        {users.length > 0 ? (
          users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.address}
            </li>
          ))
        ) : (
          <p>No users registered yet.</p>
        )}
      </ul>
    </div>
  );
};

export default UserForm;
