import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	useEffect(() => {
		actions.getContacts(); 
	}, [] );
	
	/* useEffect(() => {
		console.log(store.contacts); 
	}, [store.contacts] ); */
	
	
	return (
	<div className="text-center mt-5">
		{store.contacts?.map((item, index) => {
			return (
				<Card 
					nombre={item.name}
					email={item.email}
					phoneNumber={item.phone}
					address={item.address} 
					id={item.id}
					key={index}/>
			);
		})}
	</div>
)};
