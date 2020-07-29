import React, {useState} from "react";
import "../css/styles.css";
import uuidv4 from "./uuid";
import Notes from "./Notes";

const ListsEl = () => {



    let [notes, setNotes] = useState([
        {id: '1', title: 'one', sublist: '1'},
        {id: '2', title: 'two', sublist: '2'},
        {id: '3', title: 'three', sublist: '3'},
        {id: '4', title: 'four', sublist: '4'}
    ]);

    let addSublist = () => {

    }

    let notesDel = id => {
        let notesDelEl = notes.filter(n => n.id !== id);
        setNotes(notesDelEl);
    };
    let notesPlus = key => {
        let notesPlusEl = notes.map(p => p.key + 1);
        setNotes(notesPlusEl);
    };

    let notesAdd = text => {
        let notesAddEl = {id: uuidv4(), title: text};
        let notesAddEls = [notesAddEl, ...notes];
        setNotes(notesAddEls);
    };

    const plusScroll = () => {

        let lastEl = notes[notes.length - 1];
        let newArray = notes.filter(el => {
            return el.id !== lastEl.id
        });
        let lastArr = [lastEl, ...newArray];
        setNotes(lastArr)
    };
    const minusScroll = () => {

        let lastEl = notes[0];
        let newArray = notes.filter(el => {
            return el.id !== lastEl.id
        });
        let lastArr = [...newArray,lastEl];
        setNotes(lastArr)
    }

    let listsEl = notes.map((n, index) => (
        <ul key={index}>
            <input type="hidden" checkbox={n.isDone}/>
            <span>{n.title}</span>
            <button className="remove" onClick={() => notesDel(n.id)}>
                remove
            </button>
            {/*<button className="addSublist" onClick={() => notesPlus(index)}>*/}
            {/*    addSublist*/}
            {/*</button>*/}
        </ul>
    ));
    return (

        <div className="listsEl">
            <Notes
                listsEl={listsEl}
                title="What to notes"
                notes={notes}
                notesDel={notesDel}
                notesAdd={notesAdd}
                plusScroll={plusScroll}
                minusScroll={minusScroll}
            />
        </div>
    );
};

export default ListsEl;
