import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import firebaseConfig from '../../firebase.Config';
import { logContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

// firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    let history = useHistory()
    let location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } };

    const [logInfo, setLogInfo] = useContext(logContext)
    const [toggle, setToggle] = useState(false)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        isLogin: false,
        success: false,
        newUser: false
    })

    const onInputField = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 4;
            const passHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = (isPasswordValid && passHasNumber);
        }
        if (isFieldValid) {
            const userInfo = { ...user };
            userInfo[e.target.name] = e.target.value;
            setUser(userInfo);
        }
    }


    const formSubmit = (e) => {
        if (!toggle && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const userInfo = { ...user }
                    userInfo.error = '';
                    userInfo.success = true;
                    setUser(userInfo)
                    setLogInfo(userInfo)
                })
                .catch((error) => {
                    const userInfo = { ...user }
                    userInfo.error = error.message;
                    userInfo.success = false;
                    console.log(error.message)
                    setUser(userInfo);
                });
        }

        //sign in 
        if (toggle && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const userInfo = { ...user }
                    userInfo.error = '';
                    userInfo.success = true;
                    userInfo.isLogin = true;
                    setUser(userInfo)
                    setLogInfo(userInfo)
                    history.replace(from);
                })
                .catch((error) => {
                    const userInfo = { ...user }
                    userInfo.error = error.message;
                    userInfo.success = false;
                    console.log(error.message)
                    setUser(userInfo);
                });
        }

        e.preventDefault();
    }

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((res) => {
                const userInfo = { ...user }
                userInfo.email = res.user.email;
                userInfo.error = '';
                userInfo.success = true;
                userInfo.isLogin = true;
                setUser(userInfo)
                setLogInfo(userInfo)
                history.replace(from);
            }).catch((error) => {
                const userInfo = { ...user }
                userInfo.error = error.message;
                userInfo.success = false;
                console.log(error.message)
                setUser(userInfo);
            });
    }

    return (
        <div className='container mt-5 py-3 px-3'>
            <div className="row ">
                <div className="col-md-5 mx-auto p-4 border">
                    <h2 className='text-center'>{toggle ? 'Login' : 'Create an account'}</h2>
                    {user.success && <span>user {toggle ? 'logged' : 'created'} successfully</span>}
                    <form onSubmit={formSubmit} className='pt-5'>
                        {
                            !toggle &&
                            <div className="mb-3">
                                <input onBlur={onInputField} type="text" name='name' placeholder='Name' className="form-control" required />
                            </div>
                        }
                        <div className="mb-3">
                            <input onBlur={onInputField} type="text" name='email' placeholder='Email' className="form-control" required />

                            {/* <div className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3">
                            <input onBlur={onInputField} type="text" placeholder='Password' name='password' className="form-control" required />
                        </div>
                        {
                            toggle &&
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div>
                        }
                        {
                            !toggle &&
                            <div className="mb-3">
                                <input onBlur={onInputField} type="text" placeholder='Confirm Password' name='ConfirmPassword' className="form-control" required />
                            </div>
                        }
                        <button type="submit" className="btn btn-primary w-100">Submit</button>

                        <p className="text-secondary text-center">{toggle ? `Don't have an account?` : `Alrady have an account?`} <span className='text-primary cursor' onClick={() => setToggle(!toggle)}>{toggle ? 'Create an Account' : 'Login'}</span></p>
                    </form>
                    <div className='mx-auto text-center'>
                        <p className='text-center text-danger'>or</p>
                        <button onClick={signInWithGoogle} className='btn btn-outline-danger rounded-pill'><FcGoogle /> Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;