import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card";

import "../../styles/home.css";


export const Home = () => {
	//const [contacto, setContacto] = useState([])

	//Esta funcion obtiene la lista de contactos de la agenda
	async function listaContactos() {
		const requestOptions = {
			method: "GET",
			redirect: "follow"
		};

		try {
			let response = await fetch("https://playground.4geeks.com/contact/agendas/LMezza", requestOptions);
			if (response.status === 404) {
				CrearAgenda();
			}
			let result = await response.json();
			//console.log(result.contacts)
		} catch (error) {
			console.error(error);
		};
	}

	async function CrearAgenda() {
		const requestOptions = {
			method: "POST",
			redirect: "follow"
		};

		try {
			let response = await fetch("https://playground.4geeks.com/contact/agendas/LMezza", requestOptions);
			if (response.status === 201) {
				listaContactos();
			}
			let result = await response.json();
			console.log(result)
		} catch (error) {
			console.error(error);
		};
	}

	useEffect(() => {
		listaContactos()
	}, [])

	return (
		<div className="text-center mt-5 alaing-content-center">
			<h1>Lista de contactos</h1>
			<Link to="/addContact">Add contact</Link>
			<Card/>

			
			
			
			{/* <ul className="my-2 p-0 d-flex justify-content-between">
				Crear con map lista
				<div className="list-group">
					{contacto.length > 0 ? contacto.map((item) => <li className="list-group-item" key={item.id}>{item.name}{item.phone}{item.email}{item.address}</li>) : null}
				</div>
			</ul> */}


		</div>
	)
};
