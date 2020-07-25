import React from "react";
import "./styles.css";
import Notes from "./components/Notes";
import { useState } from "react";
import Sublist from "./components/Sublist";
import UUID from "pure-uuid";

function App() {

  let [notes, setNotes] = useState([]);


  let listsEl = notes.map(n => (
    <ul key={n.id}>
      <input type="hidden" checkbox={n.isDone} />
      <span>{n.title}</span>
      <button className="remove" onClick={() => notesDel(n.id)}>
        remove
        <button onClick={() => props.sublist}>addSublist</button>
      </button>
    </ul>
  ));

  let notesDel = id => {
    let notesDelEl = notes.filter(n => n.id !== id);
    setNotes(notesDelEl);
  };
  let notesAdd = text => {
    ;
    let notesAddEl = { id: uuidv4(), title: text };
    let notesAddEls = [notesAddEl, ...notes];
    setNotes(notesAddEls);
  };
  function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  // let plusNotes = id => {
  //   let plusNotesEl = notes.sort();

  //   let changePlusEl = [plusNotesEl, ...notes];
  //   setNotes(changePlusEl);
  // };

  return (
    <div>
      <Notes
        title="What to notes"
        notes={notes}
        listsEl={listsEl}
        notesDel={notesDel}
        notesAdd={notesAdd}
        plusScroll={plusScroll}
      />
    </div>
  );
}

export default App;
//removeNotes={removeNotes}
//  let removeNotes = (id) => {
//  let removeEl = notes.filter(n => n.id != id);
//   setNotes(removeEl)
// }
