import React, { useState, useEffect } from "react";


import "../../styles/form.css";

export const Form = () => {
  const [contact, setContact] = useState([""])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  

  async function createContact() {
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
        if (response === !201) {
          alert("Contacto no creado")
        }
        let result = await response.json();
        setContact=(result)
        setName("")
        setEmail("")
        setPhone("")
        setAddress("")
      } catch (error) {
        console.error(error);
      };
    }
  }

  function save() {
    createContact()
  }

  useEffect(() => {
    createContact()
  }, [])

  return (
    <div className="container">
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
        <button type="button" className="btn btn-primary btn-lg m-1 justify-content-center w-100" onClick={save}>Save</button>
      </form>
    </div>
  )
};