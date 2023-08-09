import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props)=>{

   const notesInitial = [
    {
        
        "_id":" 64cb036ee17c65c2e9ad1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    }, {
        
        "_id":" 64cb036ee17c8665c2e9a1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    }, {
        
        "_id":" 64cb036ee54317c65c2e9a1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    }, {
        
        "_id":" 64cb036ee717c65c2e9a1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    }, {
        
        "_id":" 64cb036ee1457c65c2e9a1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    }, {
        
        "_id":" 64cb036ee517c65c2e9a1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    }, {
        
        "_id":" 64cb036ee177c65c2e9a1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    }, {
        
        "_id":" 64cb036ee1734c65c2e9a1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    }, {
        
        "_id":" 64cb036ee17c65c22e9a1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    }
   ]
   const [notes, setNotes] = useState(notesInitial)



   //Add a note
   const addNote = (title,description,tag)=>{
    //TODO API call
    const note={
        
        "_id":" 64cb036ee17c4465c22e9a1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title[Added]",
        "description":"Please wake up early[ADDED]",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    };
    setNotes(notes.concat(note))
   }
   //Delete a note
   const deleteNote = ()=>{
    
   }
   // Edit a Note
   const editNote = ()=>{
    
   }


    return (
     
        <NoteContext.Provider value={{notes, addNote,deleteNote, editNote }}>
           { props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;