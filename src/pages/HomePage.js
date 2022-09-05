import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import NoteSearch from "../components/NoteSearch";
import { deleteNote, getActiveNotes } from "../utils/data";
import { archiveNote } from "../utils/data";
import NoNote from "../components/NoNote";

function HomePage() {
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
    <Home
      openNote={openNote}
      defaultKeyword={keyword}
      keywordChange={changeSearchParams}
    />
  );
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: props.defaultKeyword || "",
      notes: getActiveNotes(),
    };
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onOpenNoteHandler = this.onOpenNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }
  onArchiveHandler(id) {
    archiveNote(id);
    this.setState(() => {
      return { notes: getActiveNotes() };
    });
  }
  onDeleteHandler(id) {
    deleteNote(id);
    this.setState(() => {
      return { notes: getActiveNotes() };
    });
  }
  onOpenNoteHandler(id) {
    this.props.openNote(id);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return { keyword };
    });
    this.props.keywordChange(keyword);
  }
  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });
    return (
      <section>
        <NoteSearch
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <h3 className="note-section__header-title mt-4">Active Notes</h3>
        {!notes.length ? (
          <NoNote />
        ) : (
          <NoteList
            openNote={this.onOpenNoteHandler}
            notes={notes}
            onArchive={this.onArchiveHandler}
            archived={false}
            onDelete={this.onDeleteHandler}
          />
        )}
      </section>
    );
  }
}

export default HomePage;
