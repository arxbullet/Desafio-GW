import React from "react";
import "./NavBar.css";
import roles from "../../utils/utils";

import { NavLink } from "react-router-dom";

import Icon from  "@material-ui/core/Icon";

const Logo = () => {
    return(
        <>
        <img className="logo" src='https://a.uguu.se/GbCXicaS.jpg' alt="Logo"></img>
        </>
    )
}

const FootImg = () => {
    return(
        <>
        <img className="foot" src='https://a.uguu.se/iKJhhPSu.jpg' alt="Foot"></img>
        </>
    )
}

const Links = (props) => {

    const userRoles = JSON.parse(localStorage.getItem("user")).roles;
    let views = userRoles
      .map((role) => {
        if (roles[role]) {
          return roles[role];
        }
      })
      .flat()
      .sort((a, b) => a.order - b.order)
      .map((el) => el.views)
      .flat();
  
    views = views.concat(roles["default"].views);
    return (
      <ul>
        {views.map((view) => (
          <li key={view.path}>
            <NavLink
              to={view.path}
              onClick={view.path === "/logout" ? props.logout : null}
            >
              <div className="navlink">
                <Icon>{view.icon}</Icon>
                <span className="navlink-label">{view.label}</span>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }; 

  const Navbar = (props) => {
  
    return (
      <>
        <nav className={"navbar-container "}>
          <Logo/>
          <Links logout={props.logout} />
          <FootImg/>
        </nav>
      </>
    );
  };
  
  export default Navbar;