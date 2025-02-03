import React from "react";
import { Link } from "react-router-dom";



export const Card = () => {
    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://i.pinimg.com/236x/41/5b/77/415b776041f5fd0f89f174d02d19fdc7.jpg" className="card-img-top rounded-circle" alt="contact" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card-body-link">   
                        <Link to="/addContact" className="btn btn-primary">E</Link>
                        <Link to="/addContact" className="btn btn-primary">D</Link>
                    </div>
                </div>
            </div>  
        </div>


    )
};