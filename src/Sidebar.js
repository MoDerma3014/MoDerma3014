import { useNavigate } from 'react-router-dom';

function Sidebar({
  notes,
  onAddNote,
  activeNote,
  setActiveNote,

}) {
  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

  const navigate = useNavigate();

  const handleAddClick = () => {
    const newNoteId = onAddNote();
    setActiveNote(newNoteId);
    navigate(`/notes/${newNoteId}`);
  }


  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button className="plus-button" onClick={handleAddClick}>+</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, body, lastModified }, i) => (
          <div
            key={id} // Add a unique key prop
            className={`app-sidebar-note ${id === activeNote && "active"}`}
            onClick={() => {
              navigate(`/notes/${id}`);
              setActiveNote(id);
            }}
          >
            <div className="sidebar-note-title">
              <strong>{title}</strong>
            </div>
            <small className="note-meta">
              {" "}
              {new Date(lastModified).toLocaleDateString("en-US", {
                month: "numeric",
                day: "2-digit",
                year: "numeric",
              })} at{" "}
              {new Date(lastModified).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
            </small>
            <p>{body && `${(new DOMParser().parseFromString(body, 'text/html')).documentElement.innerText.substr(0, 50)}...`}</p>
            

          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;