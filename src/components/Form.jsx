//import React from 'react'

import { useState } from "react";
import Card from "./Card";

const Form = () => {
    const [user, setUser] = useState({
        nombre: "",
        canFavorita:""
      });
    const [mostrar, setMostrar] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
          user.nombre.trim().length >= 3 &&
          user.canFavorita.trim().length >= 6
        ) {
          setMostrar(true);
          setError(false);
        } else {
          setError(true);
        }
      };

  return (
    <div>
      {mostrar ? (
        <Card nombre={user.nombre} favorita={user.canFavorita} />
      ) : (
      <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
          <input
            type="text" 
            value={user.nombre}
            onChange={(event) =>
              setUser({ ...user, nombre: event.target.value })
            }
          />
          <label>Canción Favorita:</label>
          <input
            type="text"
            value={user.canFavorita}
            onChange={(event) =>
              setUser({ ...user, canFavorita: event.target.value })
            }
          />
          <button>Enviar</button>
          {error ? (
            <h4 style={{ color: "red" }}>
              Por favor chequea que la información sea correcta
            </h4>
          ) : null}
      </form>
      )}
    </div>
  )
}

export default Form
