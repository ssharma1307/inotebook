import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div class="card my-3">
        <div class="card-body">
          <h5 class="card-title"> {note.title}</h5>
          <p class="card-text">{note.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, quae ad necessitatibus libero quos impedit, officia facilis ducimus sapiente cumque exercitationem debitis minus sunt fuga nobis? Distinctio, dolor doloribus. Excepturi.</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
