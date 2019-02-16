import React, { useState } from "react";
import { Input, Button } from "./";

export const InputForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const handleSubmit = evt => {
    evt.preventDefault();
    setLoggedIn(true);
  };
  const handleLogout = () => {
    setLoggedIn(false);
    setEmail("");
    setPassword("");
  };
  if (loggedIn) {
    return (
      <div>
        You are now logged in as {email}
        <Button className="primary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          type="email"
          id="input-email"
          required
          value={email}
          placeholder="Enter email address"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          id="input-password"
          value={password}
          required
          placeholder="Enter password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Button className="primary">Login</Button>
      </div>
    </form>
  );
};
