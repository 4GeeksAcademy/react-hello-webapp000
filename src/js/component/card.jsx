import React from "react";
import { Link } from "react-router-dom";


const Card = (props) => {



return(
    <div className="card">
  <div className="card-body">
   <p>{props.nombre}</p>
   <p>{props.email}</p>
   <p>{props.phoneNumber}</p>
   <p>{props.address}</p>
   <Link to="/editForm">
				<button>Editar</button>
		</Link>
  </div>
</div>
)}



export default Card; 
