import { useState } from "react";
import ChildTwo from "../childPropsTwo/Index";

export default function Index() {
  const [message, setMessage] = useState("No message!");
  const changeMessageHandler = (newMessage) => {
    setMessage(newMessage);
  };
  return (
    <div>
      <h1>Advance Props passing.</h1>
      <p>Message From Children: {message}</p>
      <ChildTwo onChangeMessage={changeMessageHandler} />
    </div>
  );
}
