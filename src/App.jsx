import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Study");
  const [filterCategory, setFilterCategory] = useState("All");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNotes = () => {
    if (title.trim() === "" || content.trim() === "") {
      return;
    }

    if (edit !== null) {
      const editednotes = notes.map((note) => {
        if (note.id === edit) {
          return {
            ...note,
            title: title,
            content: content,
            category: category,
          };
        }
        return note;
      });

      setNotes(editednotes);
      setEdit(null);
      setTitle("");
      setContent("");
      setCategory("Study");
      return;
    }

    const newNote = {
      id: Date.now(),
      title: title,
      content: content,
      category: category,
      isPinned: false,
      createdAt: new Date().toLocaleString(),
    };

    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
  };

  const deleteNote = (id) => {
    const updatedNote = notes.filter((note) => note.id !== id);
    setNotes(updatedNote);
  };

  const togglePin = (id) => {
    const updatedNote = notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          isPinned: !note.isPinned,
        };
      }
      return note;
    });
    setNotes(updatedNote);
  };

  const editNote = (id) => {
    const notetoEdit = notes.find((note) => note.id === id);
    setTitle(notetoEdit.title);
    setContent(notetoEdit.content);
    setCategory(notetoEdit.category);
    setEdit(id);
  };

  const cancelEdit = () => {
    setEdit(null);
    setTitle("");
    setContent("");
    setCategory("Study");
  };

  const clearFilters = () => {
    setSearch("");
    setFilterCategory("All");
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()),
  );

  const categoryFilteredNotes =
    filterCategory === "All"
      ? filteredNotes
      : filteredNotes.filter((note) => note.category === filterCategory);

  const sortedNotes = [...categoryFilteredNotes].sort((a, b) => {
    return Number(b.isPinned) - Number(a.isPinned);
  });

  const totalNotes = notes.length;
  const pinnedNotes = notes.filter((note) => note.isPinned).length;
  const unpinnedNotes = totalNotes - pinnedNotes;

  const clearNotes = () => {
    const confirmClear = confirm("Are you sure you want to delete all notes?");

    if (confirmClear) {
      setNotes([]);
    }
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="container py-5">
          <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between gap-3">
            <div>
              <span className="eyebrow">PERSONAL NOTE SPACE</span>
              <h1 className="display-5 fw-bold mb-2">Quick Notes</h1>
              <p className="header-subtitle mb-0">
                Capture ideas, organize thoughts, and keep your day moving.
              </p>
            </div>
            <div className="header-badge">
              <span className="badge-dot"></span>
              {totalNotes} {totalNotes === 1 ? "note" : "notes"} saved
            </div>
          </div>
        </div>
      </header>

      <main className="container py-4 py-lg-5">
        <section className="composer-card p-4 p-lg-5 mb-4">
          <div className="section-heading mb-4">
            <div>
              <span className="section-kicker">CREATE</span>
              <h2 className="h3 mb-1">
                {edit !== null ? "Edit your note" : "Write a new note"}
              </h2>
              <p className="text-muted mb-0">
                Add a title, write your thoughts, and choose a category.
              </p>
            </div>
            {edit !== null && <span className="edit-badge">Editing mode</span>}
          </div>

          <div className="row g-3">
            <div className="col-12">
              <label className="form-label">Note title</label>
              <input
                type="text"
                className="form-control form-control-lg custom-input"
                placeholder="Enter Note Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="col-12">
              <label className="form-label">Your note</label>
              <textarea
                className="form-control custom-input note-textarea"
                placeholder="Write your note here..."
                value={content}
                maxLength={200}
                onChange={(e) => setContent(e.target.value)}
              />
              <div className="character-count text-end mt-2">
                {content.length}/200 characters
              </div>
            </div>

            <div className="col-md-5">
              <label className="form-label">Category</label>
              <select
                className="form-select custom-input"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Study">Study</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="col-12 d-flex flex-wrap gap-2 pt-2">
              <button className="btn btn-add px-4" onClick={addNotes}>
                {edit !== null ? "Update Note" : "Add Note"}
              </button>

              {edit !== null && (
                <button className="btn btn-cancel px-4" onClick={cancelEdit}>
                  Cancel Edit
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="toolbar-card p-3 p-lg-4 mb-4">
          <div className="row g-3 align-items-end">
            <div className="col-lg-5">
              <label className="form-label">Search notes</label>
              <div className="input-group">
                <span className="input-group-text search-icon">⌕</span>
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="Search by title..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md-5 col-lg-3">
              <label className="form-label">Filter category</label>
              <select
                className="form-select custom-input"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="All">All Categories</option>
                <option value="Study">Study</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="col-md-7 col-lg-4 d-flex gap-2">
              <button
                className="btn btn-outline-secondary flex-grow-1"
                onClick={clearFilters}
              >
                Clear Filters
              </button>
            </div>
          </div>
        </section>

        <section className="stats-row mb-4">
          <div className="stat-card">
            <span className="stat-label">TOTAL NOTES</span>
            <strong>{totalNotes}</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">PINNED</span>
            <strong>{pinnedNotes}</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">UNPINNED</span>
            <strong>{unpinnedNotes}</strong>
          </div>
        </section>

        <section>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <span className="section-kicker">COLLECTION</span>
              <h2 className="h3 mb-0">Your Notes</h2>
            </div>
            <span className="result-count">{sortedNotes.length} shown</span>
          </div>

          {notes.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">✦</div>
              <h3>No notes yet</h3>
              <p className="text-muted mb-0">
                Add your first note and start building your collection.
              </p>
            </div>
          ) : sortedNotes.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">⌕</div>
              <h3>No matching notes</h3>
              <p className="text-muted mb-3">Try another search or category.</p>
              <button className="btn btn-add" onClick={clearFilters}>
                Show All Notes
              </button>
            </div>
          ) : (
            <React.Fragment>
              <div className="row g-4">
                {sortedNotes.map((note) => (
                  <div className="col-12 col-md-6 col-xl-4" key={note.id}>
                    <article
                      className={`note-card h-100 ${note.isPinned ? "pinned-note" : ""}`}
                    >
                      <div className="note-card-top">
                        <div className="d-flex gap-2 align-items-center flex-wrap">
                          {note.isPinned && (
                            <span className="pinned-badge">📌 Pinned</span>
                          )}
                          <span
                            className={`category-badge category-${note.category.toLowerCase()}`}
                          >
                            {note.category}
                          </span>
                        </div>
                      </div>

                      <h3 className="note-title">{note.title}</h3>
                      <p className="note-content">{note.content}</p>

                      <div className="note-meta">
                        <span>Created</span>
                        <span>{note.createdAt || "Earlier"}</span>
                      </div>

                      <div className="note-actions mt-3">
                        <button
                          className="btn btn-sm btn-outline-dark"
                          onClick={() => editNote(note.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-pin"
                          onClick={() => togglePin(note.id)}
                        >
                          {note.isPinned ? "Unpin" : "Pin"}
                        </button>
                        <button
                          className="btn btn-sm btn-delete"
                          onClick={() => deleteNote(note.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
              <div className="d-grid gap-2 col-6 mx-auto mt-5">
                <button className="btn btn-lg btn-danger " onClick={clearNotes}>
                  Clear All
                </button>
              </div>
            </React.Fragment>
          )}
        </section>
      </main>

      <footer className="app-footer">
        <div className="container py-4 text-center">
          <small>Quick Notes · Simple thoughts, neatly organized.</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
