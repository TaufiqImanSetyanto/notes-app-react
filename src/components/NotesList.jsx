import React from "react";
import NoteItem from "./NoteItem";

export default function NotesList({ notes, onDelete, onArchive, onUnarchive}) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} onUnarchive={onUnarchive} {...note} archived={note.archived}/>
      ))}
    </div>
  );
}
