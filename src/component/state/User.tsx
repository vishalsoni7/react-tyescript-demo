import { useState } from "react";

type UserType = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<UserType | null>(null);

  const login = () => {
    setUser({
      name: "Vishal",
      email: "vishal@example.com",
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      <h2> User name - {user?.name} </h2>
      <h2> User email - {user?.email} </h2>
      <button onClick={login}> login </button>
      <button onClick={logout}> logout </button>
    </div>
  );
};
