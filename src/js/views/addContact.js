import React, { useContext } from "react";
import { Form } from "../component/form";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/form.css";
import { useLocation } from "react-router-dom";



export const AddContact = () => {
  const { store } = useContext(Context)
  const path = useLocation()

  return (

    <div className="container-reducido">
      <h1 className="text-center mt-5">{path.pathname == "/addContact" ? "Add New Contact" : "Edit Contact"}</h1>
      <Form pathname={path.pathname} />
      <Link to="/" className="d-flex">
        or get back to contacts
      </Link>
    </div>
  );
}