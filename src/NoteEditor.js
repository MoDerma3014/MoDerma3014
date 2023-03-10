import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



function NoteEditor({ activeNote, onUpdateNote, onPreviewNote, onDeleteNote}) {
    const navigate = useNavigate();
    const [setLastModified] = useState(activeNote ? activeNote.lastModified : null);

    const noteBody = activeNote.body || '';

    const handlePreviewClick = () => {
        onPreviewNote(activeNote.id);
        navigate(`/notes/${activeNote.id}`);
    };

    const onEditField = (field, value) => {
        if (field === "lastModified") {
            setLastModified(value);
        }
        onUpdateNote({
            ...activeNote,
            [field]: value,
            lastModified: field === "lastModified" ? activeNote.lastModified : dateTime,
        });
    };

    const handleDeleteNote = () => {
        navigate(`/notes/${onDeleteNote(activeNote.id)}/edit`);
    }

    // this sets the default time in the beginning
    const setDateTimeDefault = () => {
            const now = new Date();
            const options = {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: 'numeric',
                minute: 'numeric',
                hour12: false
            };
            
            const formattedDate = now.toLocaleString("en-US", options).replace(',','');
            const isoDate = formattedDate.slice(6, 10) + '-' + 
                formattedDate.slice(0, 2) + '-' + formattedDate.slice(3, 5) + 'T' + formattedDate.slice(11, 16);
            return isoDate;
        }

    const [dateTime, setDateTime] = useState(setDateTimeDefault());

    function handleDateTimeChange(event) {
        setDateTime(event.target.value);
        activeNote.lastModified = dateTime;
    }

    

    const defaultTitle = activeNote ? activeNote.title : "";
    const defaultBody = activeNote ? activeNote.body : null;


    if (!activeNote) return <div className="no-active-note">No Active Note</div>;
    return (
        <div id="app-main">
            <div className="app-main-note-edit">
                <div className="note-header">
                    <div className="note-date">
                        <input
                            className="header-input"
                            id="title"
                            placeholder="Note Title"
                            value={defaultTitle}
                            onChange={(e) => onEditField("title", e.target.value)}
                            autoFocus
                        />
                            
                            <input type="datetime-local" id="start" name="start"
                                onChange={(e) => handleDateTimeChange(e)}
                                value={dateTime}
                                ></input>

                        
                    </div>

                    <div className="header-buttons">

                        <div className="editor-toolbar">
                            <button className = "tools-edit" onClick={handlePreviewClick}>Save</button>
                        </div>
                        <div className="editor-toolbar">
                            <button className = "tools-edit" onClick={handleDeleteNote}>Delete</button>
                        </div>

                    </div>

                </div>

                
                <div style={{ height: "900px" }}>
                    <div style={{ height: "100%", overflowY: "auto"}}>
                        <ReactQuill
                            value={noteBody || defaultBody}
                            onChange={(value) => onEditField("body", value)}
                            placeholder={"Write your note here..."}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default NoteEditor;