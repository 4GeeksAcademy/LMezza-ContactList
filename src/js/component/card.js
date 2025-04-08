import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";











export const Card = (props) => {

    const { actions } = useContext(Context)


    const handleDeleteContact = async (id) => {
        await actions.deleteContact(id);
        actions.listaContactos();
    }


    return (
        <div className="card my-3 " style={{ maxHeight: "320px" }}>
            <div className="row g-0">
                <div className="col-md-2 m-auto px-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&s" className="border rounded-circle" style={{ maxHeight: "120px" }} alt="contact" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{props.name}</h4>
                        <p className="card-text">{props.phone}</p>
                        <p className="card-text">{props.email}</p>
                        <p className="card-text">{props.address}</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card-body-link d-flex justify-content-end mt-2 px-3">
                        <Link to={`/edit-contact/${props.id}`} className="btn btn-primary">E</Link>
                        {/* <Link to="/addContact" className="btn btn-primary mx-2">D</Link> */}
                        <button type="button" className="btn btn-danger mx-2" onClick={() => { handleDeleteContact(props.id) }}>D</button>
                    </div>
                </div>
            </div>
        </div>


    )
};