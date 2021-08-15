import React, { useState } from 'react';
import './Layout.css'

import NavBar from '../../components/Layout/NavBar';

import { Redirect } from 'react-router-dom';

const Layout = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('user') ? true : false )

    const user = JSON.parse(localStorage.getItem('user'))

    const logoutHandler = () => {
        localStorage.clear()
        setIsLoggedIn(false)
    }

    return(
        <>
            {isLoggedIn && user ?
                <>

              <div className= 'layout-container'>
                  <NavBar
                  
                  />
              <div className= 'layout-body'>hola </div>
              </div>
                </>
                : <Redirect to='/' />}
        </>
    )

}

export default Layout