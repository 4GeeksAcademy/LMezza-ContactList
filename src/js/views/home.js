import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

import "../../styles/home.css";


export const Home = () => {

	const { store, actions } = useContext(Context)


	useEffect(() => {
		actions.listaContactos()
	}, [])

	return (
		<div className="container-reducido">
			<h1 className="text-center mt-5">Lista de contactos</h1>
			<Link className="d-flex justify-content-end" to="/addContact"><button className="btn btn-primary">Add contact</button></Link>
			
			<ul className="my-2 p-0 w-100">
				<div className="list-group">
					{store.contact.length > 0 ? store.contact.map((item) => <Card className="" key={item.id} id={item.id} name={item.name} phone={item.phone} email={item.email} address={item.address}/>) : "No contact add new one"}
				</div>
			</ul>


		</div>
	)
};
