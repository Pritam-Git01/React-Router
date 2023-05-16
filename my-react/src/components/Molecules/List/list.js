import React from "react";
import { useState } from "react";
import styles from './list.module.css'

function List() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleDown(e) {
    if (e.key === "Enter") {
      setData([...data, input]);
      setInput("");
    }
  }
  function handleDelete(index) {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }

  return (
    <div className={styles.container}>
        <div className={styles.wraper}>
            <h2>Name Updation</h2>
      <div className={styles.taskField}>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={handleChange}
          value={input}
          onKeyDown={handleDown}
        />
      </div>
     
      <div className={styles.item}>
        {data.map((ele, index) => {
          return (
            <>
              <ul className={styles.list}>
                <li key={index}>
                  {ele} <button className={styles.delBtn} onClick={handleDelete}>Delete</button>
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default List;
