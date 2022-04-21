import React, { useState } from "react";

function LoginForm ({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        onLogin(null);
      }
    });
  }

  return (
    <form onSubmit={handleLogin}>
        <label className="login-labels" htmlFor="username"> Username:  </label>
        <input className="input-form"
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />

        <label className="login-labels" htmlFor="password"> Password: </label>
        <input className="input-form"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
          <button className="button" type="submit">Login</button>
          <button className="button" type="submit" onClick={handleLogout}>Logout</button>
    </form>
  );
}
export default LoginForm;
