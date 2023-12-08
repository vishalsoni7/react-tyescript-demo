import { Login } from "./Login";
import { ProfilePropType } from "./Profile";

type PrivatePropType = {
  isLoggedIn: boolean;
  Component: React.ComponentType<ProfilePropType>;
};

export const Private = ({ isLoggedIn, Component }: PrivatePropType) => {
  if (isLoggedIn) {
    return <Component name="Vishal" />;
  } else {
    return <Login />;
  }
};
