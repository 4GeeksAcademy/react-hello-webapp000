import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const EditForm = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState("")
	const [emailAdress, setEmailAdress] = useState("")
	const [phoneNumber, setPhoneNumber] = useState("")
	const [streetAddress, setStreetAddress] = useState("")

	const handleSumbit = e => {
		e.preventDefault();
		actions.editContact(fullName, emailAdress, streetAddress, phoneNumber)
		setFullName("");
		setEmailAdress("");
		setPhoneNumber("");
		setStreetAddress("");
	}
	

	return (
		<div className="container">
		<form onSubmit={handleSumbit}>
 			<div className="mb-3">
    			<label htmlFor="exampleInputName" className="form-label">Full name</label>
    			<input 
				type="text" 
				className="form-control" 
				id="exampleInputName"
				placeholder="Your name"
				value={fullName}
				onChange={e => setFullName(e.target.value)}
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
				onChange={e => setEmailAdress(e.target.value)}
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
				onChange={e => setPhoneNumber(e.target.value)} 
				/>
  			</div>
  			<div className="mb-3">
    			<label htmlFor="exampleInputAdress" className="form-label">Adress</label>
    			<input 
				type="text" 
				className="form-control"
				id="exampleInputAdress"  
				placeholder="Your adress"
				value={streetAddress}
				onChange={e => setStreetAddress(e.target.value)}
				/>
  			</div>
  
  			<button type="submit" className="btn btn-primary">Submit</button>
		</form>

		{/* <button onClick={() => console.log(fullName)}>Mostrar datos</button> */}
			<Link to="/">
				<button>Back home</button>
			</Link>
		</div>
	);
};
