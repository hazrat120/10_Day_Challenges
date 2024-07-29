import { useState } from "react";
import Child from "../child/Index";

export default function Index() {
  const [name, setName] = useState("Hello");
  const [age, setAge] = useState(24);

  return (
    <div>
      <h2>Parent Component</h2>
      <Child name={name} age={age} />
      <button onClick={() => setName("Hazrat Ali")}>Change Name</button>
      <button onClick={() => setAge(30)}>Change Age</button>
    </div>
  );
}
