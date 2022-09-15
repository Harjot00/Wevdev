import { useState } from "react";
import { Link } from "react-router-dom";
import "./passwords.css";

function passwords(props) {
  if (props.passwords.length === 0) {
    const savedpasswords = (
      <li className="li-style">
        <h2>No saved passwords </h2>
      </li>
    );
    return (
      <ul id="no_password" className="ul-style">
        {savedpasswords}
      </ul>
    );
  } else {
    const savedpasswords = props.passwords.map((item, idx) => {
      return (
        <li className="li-style" key={item._id}>
          <div className="div-style">
            <h3> Website Name</h3>
            <p>{item.website}</p>
          </div>
          <div className="div-style">
            <h3>Username</h3>
            <p>{item.username}</p>
          </div>
          <div className="div-style">
            <h3>Email</h3>
            <p>{item.email}</p>
          </div>
          <div>
            <h3>Password</h3>
            <p>{item.password}</p>
          </div>
          <div>
            <button
              className="btnclass"
              onClick={(event) => {
                event.preventDefault();
                props.passwordquery(item._id);
              }}
            >
              <Link to="/Updatepassword">Update</Link>
            </button>
            <button
              className="btnclass"
              onClick={() => props.deleteHandler(item._id)}
            >
              <Link to="/">Delete</Link>
            </button>
          </div>
        </li>
      );
    });
    return <ul className="ul-style">{savedpasswords}</ul>;
  }
}

export default passwords;
