import React from "react";

export default function ArchiveButton({ id, onArchive, onUnarchive, archived }) {
  return (
    <button className="note-item__archive-button" onClick={archived ? () => onUnarchive(id) : () => onArchive(id)}>
      {archived ? "Pindahkan" : "Arsipkan"}
    </button>
  );
}
