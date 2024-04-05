const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contact: {}
		},
		actions: {
			createAgenda: () => {
				fetch('https://playground.4geeks.com/contact/agendas/andreufh', {
					method: 'POST'})
					.then(response => response.json())
					.then (data => console.log(data))
					.catch(error => console.log('Error:' , error));
				},
			getAgenda: () => {
				fetch('https://playground.4geeks.com/contact/agendas/andreufh')
					.then(response => response.json())
					.then (data => console.log(data))
					.catch(error => console.log('Error:' , error));
					},	

			createContact: (fullName, emailAdress, streetAddress, phoneNumber) => {
				fetch('https://playground.4geeks.com/contact/agendas/andreufh/contacts', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
							"name": fullName,
							"email": emailAdress,
							"address":streetAddress,
							"phone":phoneNumber
						})
					})
					.then(response => response.json())
					.then (data => console.log(data))
					.catch(error => console.log('Error:' , error));
				},

				getContacts: () => {
					fetch ('https://playground.4geeks.com/contact/agendas/andreufh/contacts')
					.then(response => {
					  if(response.status===404){getActions().createAgenda()}
					  return response.json();})
					.then (data => {setStore({ contacts: data.contacts })
				console.log(data)
				})
					.catch(error => console.log('Error:' , error));

				},

				/* getSingleContact: (id) => {
					fetch (`https://playground.4geeks.com/contact/agendas/andreufh/contacts/${id}`)
					.then(response => response.json())
					.then (data => setStore ({ contact: data }))
					.catch(error => console.log('Error:' , error));

				}, */

				editContact: (fullName, emailAdress, streetAddress, phoneNumber, id) => {
					fetch (`https://playground.4geeks.com/contact/agendas/andreufh/contacts/${id}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
								"name": fullName,
								"email": emailAdress,
								"address":streetAddress,
								"phone":phoneNumber
							})
						})
						.then(response => response.json())
						.then (data => console.log(data))
						.catch(error => console.log('Error:' , error));
				},

				deleteContact:(id) => {
					fetch (`https://playground.4geeks.com/contact/agendas/andreufh/contacts/${id}`, {
						method: 'DELETE',
					})
						.then(response => response.json())
						.then (data => console.log(data))
						.catch(error => console.log('Error:' , error));

				}
			}
		}
	};


export default getState;
