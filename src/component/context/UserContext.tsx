import React, { createContext, useState } from "react";

export type AuthType = {
  name: string;
  email: string;
};

export type UserProviderType = {
  children: React.ReactNode;
};

export type UserContextType = {
  user: AuthType | null;
  setUser: React.Dispatch<React.SetStateAction<AuthType | null>>;
};

export const UserContext = createContext<UserContextType | null>(
  {} as UserContextType
);

export const UserProvider = ({ children }: UserProviderType) => {
  const [user, setUser] = useState<AuthType | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
