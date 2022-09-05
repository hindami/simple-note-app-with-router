import React from "react";
import { useParams } from "react-router-dom";
import { getNote, showFormattedDate } from "../utils/data";

function NoteDetailPage() {
  const params = useParams();
  const id = params.id;
  const note = getNote(id);

  return (
    <div className="note-detail">
      <h2>{note.title}</h2>
      <p className="mt-1">{showFormattedDate(note.createdAt)}</p>
      <article className="mt-1 note-detail__content">
        <p>{note.body}</p>
      </article>
    </div>
  );
}

export default NoteDetailPage;
