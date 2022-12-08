import { useTranslation } from "react-i18next";
// import i18n from "i18next";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const { t, i18n } = useTranslation();
  const handleChange = () => {
    console.log(i18n.language);
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">lan : {i18n.language}</Navbar.Brand>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className=" navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/account-settings">
                Account Settings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/account-settings/personal-info">
                Personal Info
              </Link>
            </li>
          </ul>
        </div>
        <button className="btn btn-primary" onClick={handleChange}>
          change languages
        </button>
      </Container>
    </Navbar>
  );
};

export default Header;
