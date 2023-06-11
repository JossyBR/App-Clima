import React from "react";
import PropTypes from "prop-types";

//El codigo utilizado para CSS es de materialize
const Header = ({ titulo }) => {
  return (
    <nav>
      <div>
        <a href="#!" lassName="nav-wrapper light-blue darken-2">
          {titulo}
        </a>
      </div>
    </nav>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Header;

{
  /* <div className="nav-wrapper light-blue darken-2">
        <a href="#!" className="brand-logo">
          {titulo}
        </a>
      </div> */
}
