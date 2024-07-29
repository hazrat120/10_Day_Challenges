import { useState } from "react";
import Child from "../child/Index";

export default function Index() {
  // eslint-disable-next-line no-unused-vars
  const [isparent, setIsparent] = useState(true);
  return (
    <div>
      <Child
        isparent={isparent}
        ChangeIsParent={() => setIsparent((isparent) => !isparent)}
      />
    </div>
  );
}
