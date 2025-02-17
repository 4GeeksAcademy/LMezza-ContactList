import React from "react";
import { Form } from "../component/form";
import { Link } from "react-router-dom";



export const AddContact = () => (
    <div className="container">
        <h1 className="text-center mt-5">Add new contact</h1>
        <Form/>
        <Link to="/" className="d-flex">
          or get back to contacts
        </Link>
    </div>
);
