import React,{useState} from "react";
import Notes from './Components/NotesList'
import {nanoid} from 'nanoid';
import Search from "./Components/Search";
import Header from "./Components/Header";
import { useEffect } from "react";

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

  const [searchText,setSearchText] = useState('')
  const [darkMode,setDarkMode] = useState(false)

  useEffect(() =>{
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
      )
      if(savedNotes){
        setNotes(savedNotes);
      }
  },[])

  useEffect(() =>{
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  },[notes]);

  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id : nanoid(),
      text : text,
      date : date.toLocaleDateString()
    }
    
    const newNotes =[...notes, newNote]
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};



  return(
    <div className={` ${darkMode && 'darkmode'} `} >
    <div className ="container">
      <Header handleToggle={setDarkMode}/>
      <Search handleSearchNote={setSearchText}/>
      <Notes notes={notes.filter((note) => 
        note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote} 
        handleDeleteNote ={deleteNote} 
        />
    </div>
    </div>
  )
}

export default App;