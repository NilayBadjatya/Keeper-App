import React, {useState} from "react";

function CreateArea(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleTitleChange(event){
        setTitle(event.target.value);
    }

    function handleContentChange(event){
        setContent(event.target.value);
    }

    function submitNote(event){  
        event.preventDefault(); // Prevents page refresh on form submit
        props.addingNote({ title, content });
        setTitle("");  
        setContent(""); 
    }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleTitleChange} value={title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleContentChange} value={content}/>
        <button onClick = {submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
