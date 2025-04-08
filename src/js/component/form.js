import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


import "../../styles/form.css";

export const Form = (props) => {
  const { store, actions } = useContext(Context)
  const params = useParams()
  

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  const saveContact = async () => {
    if (props.pathname == '/add-contact') {
      await actions.createContact(name, phone, email, address)
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
    } else {
      const id = params.id
      await actions.editContact(id, name, phone, email, address)
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
    }
  }

  // let contacto = store.contact.find(contact => contact.id == params.id)
  // console.log(contacto);
  
  useEffect(() => {
    if (props.pathname !== '/addContact' && Array.isArray(store.contact)) {
        const contacto = store.contact.find(contact => contact.id == params.id);

        if (contacto) {
            setName(contacto.name || "");
            setEmail(contacto.email || "");
            setPhone(contacto.phone || "");
            setAddress(contacto.address || "");
        } else {
            console.error("Contacto no encontrado con el id:", params.id);
        }
    }
}, [props.pathname, store.contact]);


  return (
    <div className="container-reducido">
      <form>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label d-flex">Full Name</label>
          <input className="form-control" id="fullName" type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label d-flex">Email</label>
          <input className="form-control" id="email" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label d-flex">Phone Number</label>
          <input className="form-control" id="phone" type="number" value={phone} onChange={(e) => { setPhone(e.target.value) }} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label d-flex">Address</label>
          <input className="form-control" id="address" type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} />
        </div>
        <button type="button" className="btn btn-primary btn-lg d-flex justify-content-center w-100" onClick={saveContact}>Save</button>
      </form>
    </div>
  )
};