import React from "react";
import { Form } from "../component/form";



export const AddContact = (setContact) => (
    <div className="text-center mt-5">
        <h1>Add new contact</h1>
        <Form setContact={setContact}/>
    </div>
);
