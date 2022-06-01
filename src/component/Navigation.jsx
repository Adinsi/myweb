import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div className="sidebar">
        <div className="id">
          <div className="idContent">
            <img
              width={100}
              height={100}
              src="../media/profile.jpg"
              alt="Profile"
            />
            <h3>Abdias Adinsi</h3>
          </div>
        </div>

        <div className="navigation">
          
          <ul>
            <li>
              <NavLink exact to="/" ClassName="navactive">
                <i className="fas fa-home"></i>
                <span>Accueil</span>
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/competence" ClassName="navactive">
                {" "}
                <i className="fas fa-mountain"></i>
                <span>competence</span>{" "}
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/portfolio" activeClassName="navactive">
                {" "}
                <i className="fas fa-images"></i>
                <span>portfolio</span>{" "}
              </NavLink>
            </li>

            <li>
              <NavLink exact to="/contact" activeClassName="navactive">
                {" "}
                <i className="fas fa-address-book"></i>
                <span>contact</span>{" "}
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="socialNetwork">
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-codepen"></i>
              </a>
            </li>
          </ul>
          <div className="signature">
            <p>Abdias - 2022</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
