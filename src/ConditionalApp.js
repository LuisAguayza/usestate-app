import React, { useState } from "react";

const ConditionalApp = () => {
  const [condition, setCondition] = useState(true);
  return (
    <div>
      <button onClick={() => setCondition(!condition)}>Cambiar</button>
      {/* {condition ? <h1>True</h1> : <h1>False</h1>} */}
      {/* {condition && <h1>True</h1>} */}
      <h1>{condition.toString()}</h1>
    </div>
  );
};

export default ConditionalApp;
