import { useState } from "react";
import ChildComponent from "../childComponent/Index";

export default function Index() {
  const [message, setMessage] = useState("");
  const [age, setAge] = useState(null);
  const [name, setName] = useState("");

  const handleChangeMessage = (newMessage) => {
    setMessage(newMessage);
  };

  const handleChangeAge = (newAge) => {
    setAge(newAge);
  };

  const handleChangeName = (newName) => {
    setName(newName);
  };

  return (
    <div>
      <h1>Advance Props passing</h1>
      <h3>Child Name: {name}</h3>
      <h3>Child Age: {age}</h3>
      <h3>Child Message: {message}</h3>

      <ChildComponent
        style={{ color: "red" }}
        onChangeMessage={handleChangeMessage}
        onChangeName={handleChangeName}
        onChangeAge={handleChangeAge}
      />
    </div>
  );
}
