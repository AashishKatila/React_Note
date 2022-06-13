import React,{useState} from "react";
import Notes from './Components/NotesList'
import {nanoid} from 'nanoid';
import Search from "./Components/Search";

const App = () =>{
  const [notes,setNotes] = useState([
    {
      id : nanoid(),
      text : 'This is my first text',
      date : '15/04/20222'  
    },
    {
      id : nanoid(),
      text : 'This is my second text',
      date : '25/04/20222'  
    },
    {
      id : nanoid(),
      text : 'This is my third text',
      date : '19/05/20222'  
    },
    {
      id : nanoid(),
      text : 'This is my new text',
      date : '29/05/20222'  
    }
  ])

  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id : nanoid(),
      text : text,
      date : date.toLocaleString
    }
    const newNotes =[...notes, newNote]
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

  const [searchText,setSearchText] = useState('')

  return(
    <div className ="container">
      <Search handleSearchNote={setSearchText}/>
      <Notes notes={notes.filter((note) => {
        note.text.toLowerCase().includes(searchText)}
        )}
        handleAddNote={addNote} 
        handleDeleteNote ={deleteNote} 
        />
    </div>
  )
}

export default App;