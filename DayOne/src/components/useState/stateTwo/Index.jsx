import { useState } from "react";
import Data from "/src/data.js";

export default function Index() {
  const [users, setUsers] = useState(Data);
  const [show, setShow] = useState(true);

  function handleDelet(id) {
    console.log(id);
    setUsers(users.filter((user) => id !== user.id));
  }

  return (
    <div>
      <div>
        <h1 style={{ color: "green" }}>State Two</h1>
        <button onClick={() => setShow(!show)}>Toggle</button>
      </div>
      <div>
        {show &&
          users.map((user) => (
            <div key={user.id}>
              <h2
                style={user.completed ? { color: "red" } : { color: "Orange" }}
              >
                Name: {user.name}
              </h2>
              <p>Id: {user.id}</p>
              <p>Class: {user.class}</p>
              <p>GPA: {user.GPA}</p>
              <button onClick={() => handleDelet(user.id)}>Delet</button>
            </div>
          ))}
      </div>
    </div>
  );
}
