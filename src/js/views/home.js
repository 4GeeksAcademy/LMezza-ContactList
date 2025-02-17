import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card";

import "../../styles/home.css";


export const Home = () => {
	const [contacto, setContacto] = useState([])

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
			setContacto(result.contacts)
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
			setContacto(result)
		} catch (error) {
			console.error(error);
		};
	}

	console.log(contacto);
	

	useEffect(() => {
		listaContactos()
	}, [])

	return (
		<div className="container">
			<h1 className="text-center mt-5">Lista de contactos</h1>
			<Link className="d-flex justify-content-end" to="/addContact"><button className="btn btn-primary">Add contact</button></Link>
			
			{/* <Card/> */}

			
			
			
			<ul className="my-2 p-0 d-flex justify-content-between">
				<div className="list-group">
					{contacto.length > 0 ? contacto.map((item) => <Card className="" key={item.id}>{item.name}{item.phone}{item.email}{item.address}</Card>) : null}
				</div>
			</ul>


		</div>
	)
};
