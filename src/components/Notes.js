import React, { useState } from "react";
import "../styles.css";
import Sublist from "./Sublist";

const Notes = props => {
    const sublist = () => {
        return (
            <div>
                <Sublist/>
            </div>
        )
    }
  const [newNotes, setNotes] = useState(" ");
  return (
    <div className="notes">
      <div className="input">
        <h3>{props.title}</h3>
      </div>
      <div>{props.listsEl}</div>
      <div>
        <button onClick={() => props.plusScroll}>+</button>
        <button>-</button>
        <input
          onKeyPress={e => {
            if (e.charCode === 13) {
              props.notesAdd(newNotes);
              setNotes("");
            }
          }}
          value={newNotes}
          onChange={e => {
            setNotes(e.currentTarget.value);
          }}
        />
        <button
          onClick={e => {
            props.notesAdd(newNotes);
            setNotes("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Notes;
