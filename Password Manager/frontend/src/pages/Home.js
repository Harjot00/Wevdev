import Form from "./Form.js";
import Passwords from "./Passwords.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
  return (
    <div className="main-div">
      <Link to="/savedpasswords">
        <button className="btnclass" onClick={() => props.fetchpasswords()}>
          Saved Passwords
        </button>
      </Link>

      <Link to="/Form">
        <button className="btnclass">Save new password</button>
      </Link>
    </div>
  );
}

export default Home;
