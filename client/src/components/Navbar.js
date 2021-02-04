import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper teal lighten-2">
        <span className="brand-logo center">ETL Code Generator</span>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link to="/">Help</Link>
          </li>
          <li>
            <Link to="/grok">Grok Tool</Link>
          </li>
          <li>
            <Link to="/loganalyzer">JSON Analyzer</Link>
          </li>

          <li>
            <Link to="/about">Templates</Link>
          </li>
          <li>
            <Link to="/codegenerator">Code Builder</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
