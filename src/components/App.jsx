import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
function App() {
  const[notes, setNotes] = useState([]);

  function addNotes(note) {
    setNotes((prevNotes) => [
      ...prevNotes,
      { title: note.title, content: note.content }
    ]);
  }

  function deleteNotes(id){
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index)=>{
        return index !== id
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addingNote = {addNotes}/>
      {notes.map((ele, index)=>{
       return  (<Note key = {index} id = {index} title = {ele.title} content = {ele.content} deletenote = {deleteNotes}/>)
      })}
      <Footer />
    </div>
  );
}
export default App;
