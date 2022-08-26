import "./Tasks.css";
import { useState, useEffect, useRef } from "react";
import { BsCheckLg } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

function Tasks(props) {
  const tasks = props.taskList.map((item, idx) => {
    return (
      <li className="listStyle" key={idx}>
        {item.complete ? (
          <p className="pStyleComplete">{item.text}</p>
        ) : (
          <p className="pStyleIncomplete">{item.text}</p>
        )}
        <button className="taskStatus">
          <BsCheckLg onClick={(event) => props.updateHandler(item._id)} />
        </button>
        <button className="taskStatus">
          <MdDelete onClick={(event) => props.deleteHandler(item._id)} />
        </button>
      </li>
    );
  });

  return <ul className="taskList">{tasks}</ul>;
}
export default Tasks;
