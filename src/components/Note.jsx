import React from "react";

function Note(props) {

  function deleteNote(){
    props.deletenote(props.id);
  }

  return (
    <div>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={deleteNote}>Delete</button>
      </div>
    </div>
  );
}

export default Note;
