import React from "react";
import NoteList from "../components/NoteList";
import { getArchivedNotes, unarchiveNote, deleteNote } from "../utils/data";
import NoNote from "../components/NoNote";
import { useNavigate, useSearchParams } from "react-router-dom";

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  const navigate = useNavigate();
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }
  function openNote(id) {
    navigate(`/notes/${id}`);
  }

  return (
    <Archived
      openNote={openNote}
      defaultKeyword={keyword}
      keywordChange={changeSearchParams}
    />
  );
}

class Archived extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
    };
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onOpenNoteHandler = this.onOpenNoteHandler.bind(this);
  }
  onOpenNoteHandler(id) {
    this.props.openNote(id);
  }
  onUnarchiveHandler(id) {
    unarchiveNote(id);
    this.setState(() => {
      return { notes: getArchivedNotes() };
    });
  }
  onDeleteHandler(id) {
    deleteNote(id);
    this.setState(() => {
      return { notes: getArchivedNotes() };
    });
  }
  render() {
    return (
      <section>
        <h3 className="note-section__header-title mt-3">Archived Notes</h3>

        {!this.state.notes.length ? (
          <NoNote />
        ) : (
          <NoteList
            openNote={this.onOpenNoteHandler}
            notes={this.state.notes}
            onUnarchive={this.onUnarchiveHandler}
            onDelete={this.onDeleteHandler}
            archived={true}
          />
        )}
      </section>
    );
  }
}
export default ArchivePage;
