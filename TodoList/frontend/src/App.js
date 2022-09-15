import { Fragment, useRef, useState, useEffect } from "react";
import Form from "./Components/Form";
import Tasks from "./Components/Tasks";
import "./App.css";

function App() {
  const [refresh, setrefresh] = useState(false);
  const [tasklist, setTaskList] = useState([]);
  const TaskRef = useRef();

  async function fetchData() {
    await fetch("http://localhost:3001/")
      .then((result) => result.json())
      .then((response) => {
        setTaskList([...response]);
      });
    console.log("fetched");
  }

  async function SubmitHandler(event) {
    event.preventDefault();
    const data = {
      text: TaskRef.current.value,
      complete: false,
    };

    await fetch("http://localhost:3001/newtodo", {
      method: "POST",
      body: JSON.stringify({
        name: TaskRef.current.value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json);
    TaskRef.current.value = "";
    setTaskList([...tasklist, data]);
  }

  async function updateHandler(id) {
    await fetch("http://localhost:3001/update/" + id, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log("updated");
    const updatedtasklist = tasklist.filter((item) => {
      if (item._id == id) {
        item.complete = true;
      }
    });
    setTaskList([...updatedtasklist]);
    console.log(tasklist);
  }

  async function deleteHandler(id) {
    fetch("http://localhost:3001/delete/" + id, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => res.json);
    console.log("deleted");
    setrefresh(true);
  }

  useEffect(() => {
    fetchData();
  }, [refresh]);

  return (
    <div className="items">
      <Form SubmitHandler={SubmitHandler} TaskRef={TaskRef} />
      <Tasks
        taskList={tasklist}
        updateHandler={updateHandler}
        deleteHandler={deleteHandler}
      ></Tasks>
    </div>
  );
}

export default App;
