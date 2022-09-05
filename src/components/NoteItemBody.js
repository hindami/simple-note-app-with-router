import React from "react";
import PropTypes from "prop-types";

function NoteItemBody({ id, body, openNote }) {
  return (
    <div className="note-item__body" onClick={() => openNote(id)}>
      <article>
        <p>{body}</p>
      </article>
    </div>
  );
}

NoteItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  openNote: PropTypes.func.isRequired,
};

export default NoteItemBody;
