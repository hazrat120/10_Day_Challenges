import { useState } from "react";
import Data from "/src/data.js";

export default function Index() {
  const [users, setUsers] = useState(Data);
  const [show, setShow] = useState(true);

  function handleDelet(id) {
    setUsers(users.filter((user) => user.id !== id));
    console.log(id);
  }

  return (
    <div className="container">
      <div className="wrapper">
        <h1>State Three</h1>
        <button className="toggle" onClick={() => setShow(!show)}>
          Toggle
        </button>
        <div className="box">
          {show &&
            users.map((item) => (
              <div className="childBox" key={item.id}>
                <p className="boxId">Id: {item.id}</p>
                <p className="boxName">Name: {item.name}</p>
                <p className="boxRoll">Roll: {item.Roll}</p>
                <p className="boxClass">Class: {item.class}</p>
                <p className="boxPhone">Phone: {item.phone}</p>
                <button className="delete" onClick={() => handleDelet(item.id)}>
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
