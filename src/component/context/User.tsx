import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  // const { user, setUser } = useContext(UserContext);
  const userContext = useContext(UserContext);

  const login = () => {
    if (userContext) {
      userContext.setUser({
        name: "Vishal Soni",
        email: "vishal@email.com",
      });
    }
  };

  const logout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };

  return (
    <div>
      <h2> User Name - {userContext?.user?.name} </h2>
      <h2> User Email - {userContext?.user?.email} </h2>
      <button onClick={login}> Login </button>
      <button onClick={logout}> Logout </button>
    </div>
  );
};
