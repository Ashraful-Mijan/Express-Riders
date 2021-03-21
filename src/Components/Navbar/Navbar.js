import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { logContext } from '../../App';
import './Navbar.css'
import { FaUserCircle } from "react-icons/fa";
import firebase from "firebase/app";

const Navbar = () => {
    const [logInfo, setLogInfo] = useContext(logContext)

    //sign out method
    const signOutUser = () => {
        firebase.auth().signOut().then(() => {
            setLogInfo({})
        }).catch((error) => {
            const userInfo = { ...logInfo }
            userInfo.error = error.message;
            setLogInfo(userInfo)
            console.log(error.message)
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent
        ">
            <div className="container">
                <Link className="navbar-brand fs-4 fw-bold" to="/">Express Riders</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto fw-bold">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link" to="/destination">Destination</Link>
                        <Link className="nav-link" to="/services">Services</Link>
                        <Link className="nav-link" to="/contact">Contact</Link>
                        {
                            logInfo.isLogin ?
                                <>
                                    <span className="nav-link text-primary"><FaUserCircle /> {logInfo.name}</span>
                                    <span onClick={signOutUser} className="nav-link d-inline-block btn btn-danger text-white px-3" >Log Out</span>
                                </>

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