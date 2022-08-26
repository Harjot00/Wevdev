import "./Form.css";
import { useState, useRef } from "react";
import { BsPlusLg } from "react-icons/bs";

function NewTask(props) {
  return (
    <form>
      <input
        className="newTask"
        ref={props.TaskRef}
        type="text"
        placeholder="Add new Task"
      ></input>
      <button className="NewTaskbtn" onClick={props.SubmitHandler}>
        <BsPlusLg />
      </button>
    </form>
  );
}

export default NewTask;
