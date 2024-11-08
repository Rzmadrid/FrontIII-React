//import React from "react";

const Card = ({nombre, favorita}) => {
  return (
    <div>
    <h2><b>{nombre}</b></h2><h3>Muchas gracias por responder!</h3>
    <h3>Tu canción Favorita es</h3> <h2><b>{favorita}</b></h2>
    </div>
  )
}


export default Card
//<h3>puedes escuchar tu canción en el siguiente link <a href="https://www.youtube.com/results?search_query={favorita}">{favorita}</a></h3>