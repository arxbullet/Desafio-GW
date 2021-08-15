import React, { useState} from 'react'
import './Login.css'
import axios from 'axios';
import back from '../../api/back'

import { Redirect } from 'react-router-dom';

const Login = (props) => {
     
    const [userMail, setUserMail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [redirectPath, setRedirectPath] = useState('/');
   
    
      const fetchToken = async (mail, pass) => {
              /*     try {
                      let response = await back.getToken(values);
                      setToken = (response.data)
                      console.log(response)
                  } catch (e) {
                      console.log(e)
                  } */
                  }

    const authentificate = async () => {
        try {
            let response = null
            if (userMail && password) {
                fetchToken(userMail,password)
                setRedirectPath('/dashboard')}
           
            if (response) {
                localStorage.setItem('user', JSON.stringify(response))
                setIsLoggedIn(true)

            } else {
                throw new Error('Credenciales invalidas')
            }

        } catch (e) {
            setUserMail('');
            setPassword('');
            setError(e.message)
            setTimeout(() => {
                setError(null);
            }, 5000);
        }
    };

    setTimeout(() => {
    }, 2000)

    const onuserMailChange = (e) => {
        setUserMail(e.target.value);
    };

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <>
            {isLoggedIn ? (
                <Redirect to={redirectPath} />
            ) : (
                    <div className="container">
                         <div className="logo-container">
                            <img alt ='logo'className='login-logo' src= 'http://imgfz.com/i/86HDwQb.png' name= 'logo'></img>
                            <h2 className = 'slogan'>Bienvenido a la nueva forma de contratar a la era digital</h2>
                         </div>
                        <div className="login-container">
                        <div className="form">
                            <h3>
                                <strong className='title'>Iniciar sesión</strong>
                            </h3>
                            <h5 className='subtitle'>¡Bienvenido a la nueva forma de contratar en la era digital! </h5>
                            <form>
                                <label className='form-label' name= "correoLabel">Correo</label>
                                <input
                                  style={
                                        error && userMail === ""
                                            ? { border: "1px solid var(--primary-red)" }
                                            : {}
                                    }
                                    placeholder="Correo"
                                    type="email"
                                    value={userMail}
                                    onChange={onuserMailChange}
                                    required
                                ></input>
                                <label className='form-label' name= "passLabel">Contraseña</label>
                                <input
                                    className={`form-control ${error !== "" ? " is-invalid" : ""
                                        }`}
                                    style={
                                        error && password === ""
                                            ? { border: "1px solid var(--primary-red)" }
                                            : {}
                                    }
                                    placeholder="Contraseña"
                                    type="password"
                                    value={password}
                                    onChange={onPasswordChange}
                                    minlength="6"
                                    required
                                ></input>
                                <p hidden={!error} className="text-muted">
                                    {error}
                                </p>
                            
                            <button className="btn-login" type="submit" method='post' onSubmit={authentificate}>
                                Iniciar sesión
                            </button> 
                        </form>
                        </div>
                    </div></div>
                )}
        </>
    );
}

export default Login