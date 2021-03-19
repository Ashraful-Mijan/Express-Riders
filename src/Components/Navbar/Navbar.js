import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { logContext } from '../../App';
import './Navbar.css'

const Navbar = () => {
    const [logInfo, setLogInfo] = useContext(logContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent
        ">
            <div className="container">
                <Link className="navbar-brand fs-3 fw-bold" to="/">Urban Riders</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto fw-bold">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link" to="/destination">Destination</Link>
                        <Link className="nav-link" to="/blog">Blog</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                        {
                            logInfo.isLogin ?
                                // <span>{logInfo.email}</span>
                                <Link className="nav-link text-primary" to="/destination">{logInfo.email}</Link>
                                :
                                <Link className="nav-link d-inline-block btn btn-danger text-white px-3" to="/login">Log In</Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;