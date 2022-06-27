import React, { useState, useEffect, Fragment } from "react";
import LogCard from "./LogCard";
import { getLogs } from "../../../api/libraries/apiLibraries";
import 'bootstrap/dist/css/bootstrap.min.css';

function Logs() {
  let [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

   // search input
   const [searchTerm, setSearchTerm] = useState ("");


  useEffect(() => {
    getLogs().then ((res) => {
      setLogs(res.data.data.logs);
    })
  }, []);
  

let arr = [];

for(let i = 0; i < logs.length; i++) {
  arr.unshift(logs[i]);
}

  const logRow = arr.filter((log)=> {
    if (searchTerm == "") {
      return log ;
    } else if (log.email.toLowerCase().includes(searchTerm.toLowerCase())){
    return log;
  } else if (log.action.toLowerCase().includes(searchTerm.toLowerCase())){
    return log;
  } else if (log.date_created.includes(searchTerm)){
    return log
  }
  })
    .map((log) => {
      
      return (
        <LogCard
          key={log._id}
          email={log.email}
          action={log.action}
          date_created={log.date_created.substr(0,19).replace(/T/g, "    ")}
        />
      );
    });


  return (
    <>
    <div className="container w-25 mb-3">
    <div className="w-100 justify-content-center">
        <input type="text" 
           className="text-center"
           placeholder="Paieška" 
           onChange={event => {
           setSearchTerm(event.target.value)
           }}
          />
      </div>
    </div>
    <div className="container w-75 bg-light ">
      <div className="justify-content-center">
        <table className="w-100">
          <thead className="w-100">
            <tr>
              <th className="col-4">El. paštas</th>
              <th className="col-4">Veiksmas</th>
              <th className="col-4">Data</th>
            </tr>
          </thead>
          <tbody>{logRow}</tbody>
        </table>
      </div>
      </div>
    </>
  );
}

export default Logs;
