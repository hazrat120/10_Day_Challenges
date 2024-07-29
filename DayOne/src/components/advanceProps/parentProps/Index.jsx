import { useState } from "react";
import ChildrenOne from "../childProps/Index";

export default function Index() {
  const [message, setMessage] = useState("No! message.");

  const handleChangeMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <ChildrenOne onMessageChange={handleChangeMessage} />
      <p>Message from child : {message}</p>
    </div>
  );
}
