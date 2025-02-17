import React from "react";
import { Link } from "react-router-dom";



export const Card = (Contacto) => {
    return (
        <div className="card my-3" style={{ maxHeight: "320px" }}>
            <div className="row g-0">
                <div className="col-md-2 m-auto px-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZirTv3YUaHSe-VVIQzwXUHXxb8mnJ-krbg&s" className="border rounded-circle" style={{ maxHeight: "120px" }} alt="contact" />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title">{Contacto.name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
                <div className="col-md-1">
                    <div className="card-body-link d-flex justify-content-between mt-2 mx-3">   
                        <Link to="/addContact" className="btn btn-primary">E</Link>
                        <Link to="/addContact" className="btn btn-primary">D</Link>
                    </div>
                </div>
            </div>  
        </div>


    )
};