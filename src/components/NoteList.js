import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

function NoteList({ notes, onDelete, onArchive, onUnarchive, openNote }) {
  return (
    <div className="note-app__list">
      {notes.map((note) => (
        <NoteItem
          openNote={openNote}
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onArchive={onArchive}
          onUnarchive={onUnarchive}
          {...note}
        />
      ))}
    </div>
  );
}

NoteList.propTypes = {
  openNote: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
  notes: PropTypes.array.isRequired,
};

export default NoteList;
