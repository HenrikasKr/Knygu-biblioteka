import React, { createContext, useState, useContext, useEffect } from "react";
import swal from "sweetalert";
import {
  loginUser,
  getUserById,
  getLogs,
} from "../api/libraries/apiLibraries";

const UserContext = createContext();

//  Automatically passed to every component "children"
const UserProvider = ({ children }) => {
  // useState
  const [userData, setUserData] = useState({});
  const [allLogs, setLogs] = useState([]);

  useEffect(() => {
    if (localStorage.user !== undefined) {

      // GET all user data
      setUserData(JSON.parse(localStorage.getItem("user")));
      getAllLogs();
    }
  }, []);


  // re-render auto
  function updateUserData(id) {
    getUserById(id).then((res) => {
      setUserData(res.data.data.users);
      localStorage.setItem("user", JSON.stringify(res.data.data.users));
    });
  }

  // Get logs
  function getAllLogs() {
    getLogs().then((res) => {
      setLogs(res.data.logs);
    })
  }

  // Login user
  function doLogin(data) {
    loginUser(data).then((res) => {
      // set user
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUserData(res.data.user);
      // And then set token when login
      localStorage.setItem("token", JSON.stringify(res.data.token));
    });
  }

  // Log out and clear storage
  function logOut() {
    setUserData({});
    localStorage.clear();

    swal({
      text: "Sėkmingai atsijungta!",
      icon: "success",
      button: "Puiku!",
      timer: 5000,
    });
  }

  return (
    <UserContext.Provider
      value={{
        setUserData,
        doLogin,
        userData,
        updateUserData,
        logOut,
        getAllLogs,
        allLogs
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useGlobalUserContext = () => {
  return useContext(UserContext);
};

export { UserContext, UserProvider };
