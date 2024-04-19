import React from "react";
import { Link } from "react-router-dom";

function Logo({ logoSource, bootstrapNav }) {
  if (bootstrapNav) {
    return (
      <Link className="navbar-brand" to="/">
        <img src={logoSource} alt="Bolby" />
      </Link>
    );
  }

  return (
    <div className="site-logo animate__animated animate__fadeInLeft animate__slow">
      <Link to="/">
        <img src={logoSource} alt="Silviu" />
      </Link>
    </div>
  );
}

export default Logo;
