import "./App.css";
import Form from "./pages/Form.js";
import Passwords from "./pages/Passwords.js";
import Home from "./pages/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";

function App() {
  const [name, setname] = useState("App");
  const [update, setUpdate] = useState(false);
  const [clear, setClear] = useState(true);
  const [requestedpassword, setrequestedpassword] = useState({});
  const [savepassword, setsavepassword] = useState(false);
  const [passwords, setpasswords] = useState([]);
  const [formdata, setformdata] = useState({});

  useEffect(() => {
    fetchpasswords();
  }, []);

  function ChangeHandler(event) {
    if (!update) {
      if (event.target.name === "website") {
        setformdata({ ["website"]: event.target.value });
      } else if (event.target.name === "username")
        setformdata({ ...formdata, ["username"]: event.target.value });
      else if (event.target.name === "password")
        setformdata({ ...formdata, ["password"]: event.target.value });
      else if (event.target.name === "email")
        setformdata({ ...formdata, ["email"]: event.target.value });
    } else {
      if (clear) {
        if (event.target.name === "website") {
          setrequestedpassword({ ...requestedpassword, ["website"]: "" });
        } else if (event.target.name === "username")
          setrequestedpassword({ ...requestedpassword, ["username"]: "" });
        else if (event.target.name === "password")
          setrequestedpassword({ ...requestedpassword, ["password"]: "" });
        else if (event.target.name === "email")
          setrequestedpassword({ ...requestedpassword, ["email"]: "" });
        setClear(false);
      } else {
        if (event.target.name === "website") {
          setrequestedpassword({
            ...requestedpassword,
            website: event.target.value,
          });
        } else if (event.target.name === "username")
          setrequestedpassword({
            ...requestedpassword,
            username: event.target.value,
          });
        else if (event.target.name === "password")
          setrequestedpassword({
            ...requestedpassword,
            password: event.target.value,
          });
        else if (event.target.name === "email")
          setrequestedpassword({
            ...requestedpassword,
            email: event.target.value,
          });
      }
    }
  }

  async function passwordquery(id) {
    await passwords.filter((item) => {
      if (item._id == id) {
        setrequestedpassword(item);
      }
    });
    setUpdate(true);
  }

  async function saveToDb() {
    await fetch("http://localhost:3001/newpassword", {
      method: "POST",
      body: JSON.stringify({
        website: formdata["website"],
        email: formdata["email"],
        password: formdata["password"],
        username: formdata["username"],
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  async function fetchpasswords() {
    await fetch("http://localhost:3001/")
      .then((result) => result.json())
      .then((response) => {
        setpasswords([...response]);
      });
  }

  function SubmitHandler(event) {
    event.preventDefault();
    saveToDb();
  }

  async function updateHandler(id) {
    await fetch("http://localhost:3001/updatepassword/" + `${id}`, {
      method: "PUT",
      body: JSON.stringify({
        website: requestedpassword["website"],
        email: requestedpassword["email"],
        password: requestedpassword["password"],
        username: requestedpassword["username"],
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).catch((e) => console.log(e));
  }

  async function deleteHandler(id) {
    await fetch("http://localhost:3001/deletepassword/" + `${id}`, {
      method: "DELETE",
    });
  }

  return (
    <div className={`${name}`}>
      <Routes>
        <Route path="/" element={<Home fetchpasswords={fetchpasswords} />} />
        <Route
          path="/savedpasswords"
          element={
            <Passwords
              passwords={passwords}
              passwordquery={passwordquery}
              deleteHandler={deleteHandler}
            />
          }
        />
        <Route
          path="/Form"
          element={
            <Form
              update={update}
              SubmitHandler={SubmitHandler}
              ChangeHandler={ChangeHandler}
            />
          }
        />
        <Route
          path="/Updatepassword"
          element={
            <Form
              requestedpassword={requestedpassword}
              ChangeHandler={ChangeHandler}
              updateHandler={updateHandler}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
