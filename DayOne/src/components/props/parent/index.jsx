import { useState } from "react";
import Children from "../child/index";

export default function Index() {
  // eslint-disable-next-line no-unused-vars
  const [isParent, setIsParent] = useState(true);

  return (
    <div>
      <h4>Props Parent</h4>
      <div>
        <Children
          isParent={isParent}
          changeIsParent={() => setIsParent((isParent) => !isParent)}
        />
      </div>
    </div>
  );
}
