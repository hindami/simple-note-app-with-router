import React from "react";
import NoteAppHeader from "./components/NoteAppHeader";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddNotePage from "./pages/AddNotePage";
import ArchivePage from "./pages/ArchivePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import A404Page from "./pages/A404Page";

class App extends React.Component {
  render() {
    return (
      <div className="note-app">
        <NoteAppHeader />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notes/add" element={<AddNotePage />} />
            <Route path="/notes/archive" element={<ArchivePage />} />
            <Route path="/notes/:id" element={<NoteDetailPage />} />
            <Route path="*" element={<A404Page />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
