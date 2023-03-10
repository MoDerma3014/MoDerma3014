
import React from "react";
import { useNavigate } from 'react-router-dom';

function NoteViewer({ activeNote, onDeleteNote, onEditNote }) {
  const navigate = useNavigate();

  const handleEditClick = () => {
    onEditNote(activeNote.id);
    navigate(`/notes/${activeNote.id}/edit`);
  }

  const handleDeleteNote = () => {
    navigate(`/notes/${onDeleteNote(activeNote.id)}`);
  }

  if (!activeNote) {
    return;
  }

  return (
    <div id="app-main">

      <div className="note-header">
        <div className="note-date">
          <h1 className="preview-title">{activeNote.title}</h1>
          <div id="timestamp">
            {activeNote && new Date(activeNote.lastModified).toLocaleDateString("en-US", {
              year: 'numeric',
              month: 'numeric',
              day: '2-digit',
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
              hourCycle: "h24"
            })}
          </div>
        </div>
        <div className="header-buttons">
          <div className="editor-toolbar">
            <button className="tools-preview" onClick={handleEditClick}>Edit</button>
          </div>
          <div className="editor-toolbar">
            <button className="tools-preview" onClick={handleDeleteNote}>Delete</button>
          </div>
        </div>
      </div>
      
      <div className="app-main-note-preview">
        <div className="markdown-preview" dangerouslySetInnerHTML={{ __html: activeNote.body }}></div>
      </div>
    </div>



  );
}

export default NoteViewer;
