import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

// A provider for UserContext, managing the current user state, login, and logout functionality.
export const UserContextProvider = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("user"))?.username || null;

  // Setting the initial user state with the stored user data. As no backend is used, the user data is stored in the local storage. with radom avatar
  const [currentUser, setCurrentUser] = useState({
    firstname: "Speer-Dev-Test",
    username: storedUser,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiW4hjxrunJLv_zWCxTNdu8_OHJ3Xvv3nbcg&s",
  });

  // Updates the current user with the provided username
  const loginUser = ({ username }) => {
    setCurrentUser({
      firstname: "Speer-Dev-Test",
      username,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiW4hjxrunJLv_zWCxTNdu8_OHJ3Xvv3nbcg&s",
    });

    localStorage.setItem("user", JSON.stringify(currentUser));
  };

  // Logs out the current user by setting the user.username to null
  const logoutUser = () => {
    setCurrentUser({
      firstname: "Speer-Dev-Test",
      username: null,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiW4hjxrunJLv_zWCxTNdu8_OHJ3Xvv3nbcg&s",
    });
    localStorage.removeItem("user"); // Clear user data on logout
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ currentUser, logoutUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};
