import React, { useState } from "react";
import NoteContext from "./noteContext";


const NoteState = (props)=>{

    const s1 = {
           "name" : "Sukhdeep",
           "class": "5b" 
    }
    const [state, setState] = useState(s1)
    const update = ()=>{
        setTimeout(() => {
            setState({"name" : "Sukhdeep Sharma",
             "class": "5b"})
        }, 1000);
    }
    return (
     
        <NoteContext.Provider value={{state:state, update:update}}>
           { props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;