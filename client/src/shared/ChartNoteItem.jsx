import React from "react";

export default function ChartNoteItem({ note }) {
  return (
    <div className="chart-note-item">
      <span className={`colorPoint ${note.className}`}></span>
      <span className="text"> {note.label}</span>
    </div>
  );
}
