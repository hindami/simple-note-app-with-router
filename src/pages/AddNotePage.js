import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/data";

function AddNotePage() {
  const navigate = useNavigate();
  function onAddNoteHandler({ title, body }) {
    addNote({ title, body });
    navigate("/");
  }
  return (
    <section>
      <h2 className="note-input__title">Add Note</h2>
      <NoteInput onAdd={onAddNoteHandler} />
    </section>
  );
}

export default AddNotePage;
