const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contact: {}
		},
		actions: {
			createContact: (fullName, emailAdress, streetAddress, phoneNumber) => {
				fetch('https://playground.4geeks.com/apis/fake/contact/', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
							"full_name": fullName,
							"email": emailAdress,
							"agenda_slug": "andreufh",
							"address":streetAddress,
							"phone":phoneNumber
						})
					})
					.then(response => response.json())
					.then (data => console.log(data))
					.catch(error => console.log('Error:' , error));
				},

				getContacts: () => {
					fetch ('https://playground.4geeks.com/apis/fake/contact/agenda/andreufh')
					.then(response => response.json())
					.then (data => {setStore ({ contacts: data })
				})
					.catch(error => console.log('Error:' , error));

				},

				getSingleContact: (id) => {
					fetch (`https://playground.4geeks.com/apis/fake/contact/${id}`)
					.then(response => response.json())
					.then (data => setStore ({ contact: data }))
					.catch(error => console.log('Error:' , error));

				},

				editContact: (fullName, emailAdress, streetAddress, phoneNumber, id) => {
					fetch (`https://playground.4geeks.com/apis/fake/contact/${id}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
								"full_name": fullName,
								"email": emailAdress,
								"agenda_slug": "andreufh",
								"address":streetAddress,
								"phone":phoneNumber
							})
						})
						.then(response => response.json())
						.then (data => console.log(data))
						.catch(error => console.log('Error:' , error));
				},

				deleteContact:(id) => {
					fetch (`https://playground.4geeks.com/apis/fake/contact/${id}`, {
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
