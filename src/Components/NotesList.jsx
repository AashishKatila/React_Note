import Note from "./Note";
import AddNote from "./AddNote";

const Notes = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="NoteList">
      {notes.map((note) => (
        <Note
          key = {note.id}
          id={note.id}
          value ={note.text}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default Notes;
