import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

function Form(props) {
  return (
    <form className="formclass">
      <input
        required
        type="text"
        name="website"
        value={props.requestedpassword ? props.requestedpassword.website : null}
        placeholder="Enter the name of the website"
        onChange={(event) => props.ChangeHandler(event)}
      ></input>
      <input
        required
        type="text"
        name="username"
        value={
          props.requestedpassword ? props.requestedpassword.username : null
        }
        placeholder="Enter username"
        onChange={(event) => props.ChangeHandler(event)}
      ></input>
      <input
        required
        type="text"
        name="email"
        value={props.requestedpassword ? props.requestedpassword.email : null}
        placeholder="enter email"
        onChange={(event) => props.ChangeHandler(event)}
      ></input>

      <input
        required
        type="text"
        name="password"
        value={
          props.requestedpassword ? props.requestedpassword.password : null
        }
        placeholder="Enter password"
        onChange={(event) => props.ChangeHandler(event)}
      ></input>
      <div>
        {props.requestedpassword ? (
          <Link to="/">
            <button
              className="btnclass"
              onClick={() => props.updateHandler(props.requestedpassword._id)}
            >
              Update Password
            </button>
          </Link>
        ) : (
          <>
            <button className="btnclass">Generate Password</button>

            <button
              className="btnclass"
              id="btn_id"
              type="submit"
              onClick={(event) => props.SubmitHandler(event)}
            >
              <Link to="/">Save</Link>
            </button>
          </>
        )}
      </div>
    </form>
  );
}

export default Form;
