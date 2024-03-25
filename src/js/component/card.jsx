import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/card.css";


const Card = (props) => {
  const { store, actions } = useContext(Context);
  const handleDelete = () => {
      actions.deleteContact(props.id);
}

return(
  <div className="card">
  <div className="card-body">
    <h2 className="card-title">{props.nombre}</h2>
    <p className="card-info"><strong><i class="fa-solid fa-envelope"></i></strong> {props.email}</p>
    <p className="card-info"><strong><i class="fa-solid fa-phone"></i></strong> {props.phoneNumber}</p>
    <p className="card-info"><strong><i class="fa-solid fa-location-dot"></i></strong> {props.address}</p>
    <div className="card-buttons">
      <Link to={`/editForm/${props.id}`} className="btn btn-edit">
      <i className="fa-solid fa-pen-to-square"></i>
      </Link>
      <button onClick={handleDelete} className="btn btn-delete">
      <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  </div>
</div>
);
};



export default Card; 
