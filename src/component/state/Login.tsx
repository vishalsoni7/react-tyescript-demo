import { useState } from "react";

const Login = () => {
  // TS is directly taking care of types because of type references.
  const [status, setStatus] = useState(false);

  const login = () => {
    setStatus(true);
  };
  const logout = () => {
    setStatus(false);
  };
  return (
    <div>
      <button onClick={login}> Log In </button>
      <button onClick={logout}> Log Out </button>
      <h2> User is {status ? "loged in" : "loged out"} </h2>
    </div>
  );
};

export default Login;
