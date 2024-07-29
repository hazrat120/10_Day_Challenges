import { useState } from "react";
import Data from "../../../data/index";
import "./index.css";

export default function Index() {
  const [data, setData] = useState(Data);

  const handleDelete = (id) => {
    setData(data.filter((Data) => id !== Data.id));
  };

  return (
    <div className="tasklist">
      <div className="taskWrapper">
        {data.map((item) => (
          <div className="mapwrap" key={item.id}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
