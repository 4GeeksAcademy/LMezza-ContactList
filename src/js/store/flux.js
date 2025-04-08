const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			createContact: async (name, phone, email, address) => {
				if (name === "" || email === "" || phone === "" || address === "") {
					throw new Error("Contacto no creado. Complete todos los campos de manera correcta");
				} else {
					const myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");

					const raw = JSON.stringify({
						"name": name,
						"phone": phone,
						"email": email,
						"address": address
					});

					const requestOptions = {
						method: "POST",
						headers: myHeaders,
						body: raw,
						redirect: "follow"
					};

					try {
						let response = await fetch("https://playground.4geeks.com/contact/agendas/LMezza/contacts", requestOptions);
						console.log(response);

						if (response === !201) {
							alert("Contacto no creado")
						}
						let result = await response.json();
						const store = getStore();
						setStore({ ...store, contact: result });
					} catch (error) {
						console.error(error);
					};
				}
			},

			editContact: async (id, name, phone, email, address) => {
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify({
					"name": name,
					"phone": phone,
					"email": email,
					"address": address
				});

				const requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/LMezza/contacts/${id}`, requestOptions);
					const result = await response.json();
					console.log(result)

					if (response.ok) {
						const store = getStore();
						const updatedContacts = store.contact.map(contact => {
							if (contact.id === id) {
								return {id, name, phone, email, address }; 
							}
							return contact; 
						});
						console.log(contact);
						
			
						setStore({ ...store, contact: updatedContacts });
			
						console.log("Contacto editado correctamente:", { id, name, phone, email, address });
					} else {
						console.error("Error al editar el contacto. Respuesta del servidor:", response.status);
					}
				} catch (error) {
					console.error(error);
				};
			},


			deleteContact: async (id) => {
				const confirmed = window.confirm("Are you sure you want to delete this contact?");
				if (confirmed) {

					const requestOptions = {
						method: "DELETE",
						redirect: "follow"
					};

					try {
						const response = await fetch(`https://playground.4geeks.com/contact/agendas/LMezza/contacts/${id}`, requestOptions);
						
						// console.log(result)
						// console.log(response)
						if (response.status == 204) {
							const store = getStore
							const updatedContacts = store.contact.filter(contact => contact.id !== id);
							//setStore({ ...store, contact: result.contacts });
							setStore({ ...store, contact: updatedContacts });
						}
					} catch (error) {
						console.error(error);
					};
				}
			},

			listaContactos: async () => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				try {
					let response = await fetch("https://playground.4geeks.com/contact/agendas/LMezza", requestOptions);
					if (response.status === 404) {
						const actions = getActions
						actions.crearAgenda();
					}
					let result = await response.json();
					console.log(result.contacts);

					const store = getStore();
					setStore({ ...store, contact: result.contacts });
				} catch (error) {
					console.error(error);
				};
			},

			crearAgenda: async () => {
				const requestOptions = {
					method: "POST",
					redirect: "follow"
				};

				try {
					let response = await fetch("https://playground.4geeks.com/contact/agendas/LMezza", requestOptions);
					if (response.status === 201) {
						const actions = getActions
						actions.listaContactos();
					}
					// let result = await response.json();
					// const store = getStore();
					// setStore({ ...store, contact: result });
				} catch (error) {
					console.error(error);
				};

			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
