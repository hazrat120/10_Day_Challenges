import { useState } from "react";

export default function Index() {
  const [user, setUser] = useState([
    { id: 100, name: "Hazrat Ali", mark: 80, completed: true },
    { id: 110, name: "Mizan Ahad", mark: 89, completed: true },
    { id: 120, name: "Rakib", mark: 79, completed: true },
  ]);
  const [show, setShow] = useState(true);

  function handleDelet(id) {
    console.log("ID:", id);
    setUser(user.filter((users) => id !== users.id));
  }

  return (
    <div>
      <div>
        <h1>State One</h1>
        <button type="button" onClick={() => setShow(!show)}>
          Toggle Button
        </button>
      </div>

      {show &&
        user.map((item) => (
          <div key={item.id}>
            <h3 style={item.completed ? { color: "red" } : ""}>
              {" "}
              User Name: {item.name}
            </h3>
            <p> id: {item.id}</p>
            <p> Mark: {item.mark}</p>
            <button onClick={() => handleDelet(item.id)}>Delet</button>
          </div>
        ))}
    </div>
  );
}
