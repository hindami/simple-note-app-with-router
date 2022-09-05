import React from "react";
import NoteItemHeader from "./NoteItemHeader";
import NoteItemBody from "./NoteItemBody";
import NoteItemFooter from "./NoteItemFooter";
import PropTypes from "prop-types";

function NoteItem({
  archived,
  body,
  createdAt,
  id,
  title,
  onArchive,
  onDelete,
  onUnarchive,
  openNote,
}) {
  return (
    <div className="note-item">
      <NoteItemHeader title={title} createdAt={createdAt} />
      <NoteItemBody body={body} openNote={openNote} id={id} />
      <NoteItemFooter
        id={id}
        onDelete={onDelete}
        onArchive={onArchive}
        onUnarchive={onUnarchive}
        archived={archived}
      />
    </div>
  );
}

NoteItem.propTypes = {
  archived: PropTypes.bool.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
  onUnarchive: PropTypes.func,
  openNote: PropTypes.func.isRequired,
};

export default NoteItem;
