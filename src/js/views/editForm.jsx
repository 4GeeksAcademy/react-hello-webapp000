import React, { useState, useEffect, useContext } from "react";
import { Link, useParams} from "react-router-dom";
import "../../styles/edit.css";
import { Context } from "../store/appContext";



export const EditForm = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState("Nombre");
	const [emailAdress, setEmailAdress] = useState("email");
	const [phoneNumber, setPhoneNumber] = useState("numero");
	const [streetAddress, setStreetAddress] = useState("calle");
	const { id } = useParams();
	

	useEffect(() =>{
		actions.getSingleContact(id);
	}, []);

	useEffect(() =>{
		setFullName(store.contact.full_name);
		setEmailAdress(store.contact.email);
		setPhoneNumber(store.contact.phone);
		setStreetAddress(store.contact.address);
	}, [store.contact]);


	const handleSumbit = e => {
		e.preventDefault();
		actions.editContact(fullName, emailAdress, streetAddress, phoneNumber, id);
		setFullName("");
		setEmailAdress("");
		setPhoneNumber("");
		setStreetAddress("");
	}
	

	return (
		<div className="container">
		<form onSubmit={handleSumbit} className="custom-form">
		  <div className="mb-3">
			<label htmlFor="exampleInputName" className="form-label">Full name</label>
			<input
			  type="text"
			  className="form-control"
			  id="exampleInputName"
			  placeholder="Your name"
			  value={fullName}
			  onChange={(e) => setFullName(e.target.value)}
			/>
		  </div>
		  <div className="mb-3">
			<label htmlFor="exampleInputEmail" className="form-label">Email</label>
			<input
			  type="email"
			  className="form-control"
			  id="exampleInputEmail"
			  placeholder="Your email"
			  value={emailAdress}
			  onChange={(e) => setEmailAddress(e.target.value)}
			/>
		  </div>
		  <div className="mb-3">
			<label htmlFor="exampleInputNumber" className="form-label">Phone Number</label>
			<input
			  type="text"
			  className="form-control"
			  id="exampleInputNumber"
			  placeholder="Your phone"
			  value={phoneNumber}
			  onChange={(e) => setPhoneNumber(e.target.value)}
			/>
		  </div>
		  <div className="mb-3">
			<label htmlFor="exampleInputAddress" className="form-label">Address</label>
			<input
			  type="text"
			  className="form-control"
			  id="exampleInputAddress"
			  placeholder="Your address"
			  value={streetAddress}
			  onChange={(e) => setStreetAddress(e.target.value)}
			/>
		  </div>
  
		  <button type="submit" className="btn btn-primary">Submit</button>
		</form>
  
		<Link to="/" className="back-home-link">
		  <button className="btn btn-secondary">Back home</button>
		</Link>
	  </div>
	);
  };
