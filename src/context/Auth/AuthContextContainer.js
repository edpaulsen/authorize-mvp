import { Auth, Hub } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { AuthContextProvider } from "./AuthContext";

const AuthContextContainer = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    let fetchUser = async () => {
      await Auth.currentAuthenticatedUser();
    };
    Hub.listen("auth", fetchUser);
    fetchUser();
  });

  const checkAuthentication = () => {
    return !!Auth.user;
  };

  const getCurrentUser = () => {
    return Auth.user;
  };

  return (
    <AuthContextProvider
      value={{
        user,
        checkAuthentication,
        getCurrentUser,
      }}
    >
      {children}
    </AuthContextProvider>
  );
};

export default AuthContextContainer;
