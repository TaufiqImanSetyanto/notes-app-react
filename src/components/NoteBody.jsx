import React from "react";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";
export default function NoteBody({ notes, archivedNotes, onDelete, onArchive, onUnarchive, addNote }) {
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan aktif</h2>
      {notes.length != 0 ? <NotesList notes={notes} onDelete={onDelete} onArchive={onArchive} /> : <p className="notes-list__empty-message">Tidak ada catatan</p>}
      <h2>Arsip</h2>
      {archivedNotes.length != 0 ? <NotesList notes={archivedNotes} onDelete={onDelete} onUnarchive={onUnarchive} /> : <p className="notes-list__empty-message">Tidak ada catatan</p>}
    </div>
  );
}
