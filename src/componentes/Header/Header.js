import React from "react";


//El codigo utilizado para CSS es de materialize
const Header = ({ titulo }) => {
  return (
    <nav>
      <div className="nav-wrapper light-blue darken-2">
        <a href="#!" className="brand-logo">{titulo}</a>
      </div>
    </nav>
  );
};

export default Header;
