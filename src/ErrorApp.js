import React, { useState } from "react";

const ErrorApp = () => {
  const [error, setError] = useState("");
  return (
    <div>
      <button onClick={() => setError("Error de API")}>Error</button>
      <button onClick={() => setError("Crendencial Incorrecto")}>
        Error Credenciales
      </button>
      <button onClick={() => setError("")}>Bien</button>
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default ErrorApp;
