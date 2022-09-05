import React from "react";
import { FiArchive, FiTrash } from "react-icons/fi";
import PropTypes from "prop-types";

function NoteItemFooter({ id, onDelete, onArchive, archived, onUnarchive }) {
  return (
    <div className="note-item__footer">
      <button
        onClick={() => onDelete(id)}
        className="btn btn-delete"
        title="Delete"
      >
        <FiTrash />
      </button>
      {!archived && (
        <button
          onClick={() => onArchive(id)}
          className="btn btn-archive ml-2"
          title="Archive"
        >
          <FiArchive />
        </button>
      )}
      {archived && (
        <button
          onClick={() => onUnarchive(id)}
          className="btn btn-unarchive ml-2"
          title="Unarchive"
        >
          <FiArchive />
        </button>
      )}
    </div>
  );
}

NoteItemFooter.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func,
  archived: PropTypes.bool.isRequired,
};

export default NoteItemFooter;
