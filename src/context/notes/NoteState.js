import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props)=>{

   const notesInitial = [
    {
        
        "_id":" 64cb036ee17c65c2e9a1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    }, {
        
        "_id":" 64cb036ee17c65c2e9a1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    }, {
        
        "_id":" 64cb036ee17c65c2e9a1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    }, {
        
        "_id":" 64cb036ee17c65c2e9a1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    }, {
        
        "_id":" 64cb036ee17c65c2e9a1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    }, {
        
        "_id":" 64cb036ee17c65c2e9a1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    }, {
        
        "_id":" 64cb036ee17c65c2e9a1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    }, {
        
        "_id":" 64cb036ee17c65c2e9a1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    }, {
        
        "_id":" 64cb036ee17c65c2e9a1fda6",
        "user":"64c9b9f86b48c1f0a207c220",
        "title":"My title",
        "description":"Please wake up early",
        "tag":"personal",
        "date":"2023-08-03T01:31:26.230+00:00",
        "__v":0
    }
   ]
   const [notes, setNotes] = useState(notesInitial)
    return (
     
        <NoteContext.Provider value={{notes, setNotes}}>
           { props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;