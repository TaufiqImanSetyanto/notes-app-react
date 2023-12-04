import React from "react";
import { getInitialData } from "../utils";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";

class PersonalNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      archivedNotes: [],
    };
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: +new Date(),
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    const archivedNotes = this.state.archivedNotes.filter((note) => note.id !== id);
    this.setState({ notes, archivedNotes });
  }
  onArchiveHandler(id) {
    const setArchive = this.state.notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note));
    const archivedNote = setArchive.find((note) => note.id === id);

    this.setState((prevState) => {
      return {
        notes: setArchive.filter((note) => note.id !== id),
        archivedNotes: [...prevState.archivedNotes, archivedNote],
      };
    });
  }

  onUnarchiveHandler(id) {
    const unsetArchive = this.state.archivedNotes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note));
    const unarchivedNote = unsetArchive.find((note) => note.id === id);

    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, unarchivedNote],
        archivedNotes: unsetArchive.filter((note) => note.id !== id),
      };
    });
  }

  render() {
    return (
      <>
        <NoteHeader />
        <NoteBody notes={this.state.notes} archivedNotes={this.state.archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onUnarchive={this.onUnarchiveHandler} addNote={this.onAddNoteHandler} />
      </>
    );
  }
}
export default PersonalNotes;
