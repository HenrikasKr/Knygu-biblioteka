import React, { useState } from "react";
import RegisterUser from "./Dashboard/RegisterUser";
import Logs from "./Dashboard/Logs";
import Users from "./Dashboard/Users";
import AddBooks from "./Dashboard/addBooks"
import "./style/Dashboard.css";

function Dashboard() {
  const [display, setDisplay] = useState("users");
  return (
    <div className="Dashboard-container">
      <div className="Dashboard-body">
        <button onClick={() => setDisplay("users")}>Visi vartotojai</button>
        <button onClick={() => setDisplay("registerUser")}>Pridėti naują vartotoją</button>
        <button onClick={() => setDisplay("addBooks")}>Pridėti naują knygą</button>
        <button onClick={() => setDisplay("logs")}>Žurnalas</button>
      </div>

      {display == "users" && <Users />}
      {display == "logs" && <Logs />}
      {display == "addBooks" && <AddBooks/>}
      {display == "registerUser" && <RegisterUser />}
    </div>
  );
}

export default Dashboard;
