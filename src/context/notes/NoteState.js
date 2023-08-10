import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);


 //Get all note
 const getNotes = async (title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
  
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjOWI5Zjg2YjQ4YzFmMGEyMDdjMjIwIn0sImlhdCI6MTY5MTAxOTUzMH0.6mTjPEvBnU0IBZ8Q6KcwSt5YiWrr0vDN4EILXT02Oao",
        },
      });
      const json = await response.json();
      console.log(json);
      setNotes(json);
    }



  //Add a note
  const addNote = async (title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
  
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjOWI5Zjg2YjQ4YzFmMGEyMDdjMjIwIn0sImlhdCI6MTY5MTAxOTUzMH0.6mTjPEvBnU0IBZ8Q6KcwSt5YiWrr0vDN4EILXT02Oao",
        },
        body: JSON.stringify({title, description, tag}),
      });
      const json = await response.json();
      console.log(json);

    const note = {
      _id: " 64cb036ee17c4465c22e9a1fda6",
      user: "64c9b9f86b48c1f0a207c220",
      title: title,
      description: description,
      tag: tag,
      date: "2023-08-03T01:31:26.230+00:00",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };


  //Delete a note
  const deleteNote = async (id) => {
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
  
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjOWI5Zjg2YjQ4YzFmMGEyMDdjMjIwIn0sImlhdCI6MTY5MTAxOTUzMH0.6mTjPEvBnU0IBZ8Q6KcwSt5YiWrr0vDN4EILXT02Oao",
        }
      });
      const json = await response.json();
      console.log(json);

    console.log("delete note" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    
    setNotes(newNotes);
  };



  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRjOWI5Zjg2YjQ4YzFmMGEyMDdjMjIwIn0sImlhdCI6MTY5MTAxOTUzMH0.6mTjPEvBnU0IBZ8Q6KcwSt5YiWrr0vDN4EILXT02Oao",
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json =  response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break; 
    }
     
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
