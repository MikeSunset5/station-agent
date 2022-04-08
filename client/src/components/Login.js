import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";


function Login({onLogin}) {
  const [showLogin, setShowLogin] = useState(true)

 
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        onLogin(null);
      }
    });
  }

  return (
    <div className="form-container">
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <p className="login-labels">
            Don't have an account? &nbsp;
            <button className="button-test" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
          </>
      ) : (
        <>
        <SignUpForm onLogin={onLogin} />
        <p className="login-labels">
            Already have an account? &nbsp;
            <button color="secondary" className="button-test" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}
export default Login;