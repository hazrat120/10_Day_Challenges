/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function Index({ locale }) {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString(locale));
    }, 1000);
  }, [locale]);

  return (
    <div>
      <h1>Right Now {time}</h1>
    </div>
  );
}
