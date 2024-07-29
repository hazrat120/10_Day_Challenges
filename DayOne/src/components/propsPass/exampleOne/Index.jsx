import { useState } from "react";
import ChildComponent from "../exampleTwo/Index";

export default function Index() {
  const [name, setName] = useState("Hazrat");
  const [age, setAge] = useState(24);

  return (
    <div>
      <ChildComponent name={name} age={age} />
      <button onClick={() => setName("Mr.Ali")}>Change Name</button>
      <button onClick={() => setAge(20)}>Change Age</button>
    </div>
  );
}
