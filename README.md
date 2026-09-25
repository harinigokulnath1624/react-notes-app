# 📝 Quick Notes

Quick Notes is a responsive **React note-taking application** built to practice core React concepts and create a practical, interactive project.

The application allows users to create, edit, search, filter, pin, and delete notes. Notes are also stored in the browser using `localStorage`, so they remain available after refreshing the page.

---

## ✨ Features

* ➕ Add new notes
* ✏️ Edit existing notes
* 🗑️ Delete individual notes
* 📌 Pin and unpin notes
* 🔍 Search notes by title
* 🏷️ Filter notes by category
* 📊 View total, pinned, and unpinned note counts
* 🧹 Clear all notes with confirmation
* 🔄 Clear search and category filters
* 💾 Persist notes using `localStorage`
* 🕒 Display note creation date and time
* 🔢 Character counter with a 200-character limit
* 📭 Display an empty state when there are no notes
* ⚠️ Display a "No matching notes" message when filters return no results
* 📱 Responsive design using Bootstrap
* 🎨 Custom styling using CSS

---

## 🛠️ Technologies Used

* **React**
* **JavaScript**
* **Bootstrap**
* **CSS**
* **Vite**
* **Browser localStorage**

---

## 📚 React Concepts Practiced

This project was created to practice the following React concepts:

* `useState`
* `useEffect`
* Controlled form inputs
* Event handling
* Conditional rendering
* List rendering using `.map()`
* Array methods such as `.filter()` and `.sort()`
* Updating objects inside arrays
* Passing and managing state
* Form handling
* Browser `localStorage`

---

## 📂 Project Structure

The project uses a simple structure without splitting the application into multiple React components.

```text
quick-notes/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md
```

### `App.jsx`

The main application file contains:

* React state
* Note creation
* Note editing
* Note deletion
* Pin/unpin functionality
* Search functionality
* Category filtering
* Statistics
* localStorage functionality
* Conditional rendering
* Note display

### `App.css`

Contains the custom styling for the application, including:

* Colors
* Typography
* Cards
* Buttons
* Layout
* Responsive styling
* Note badges
* Empty states

### `main.jsx`

The entry point of the React application that renders the `App` component.

---

## 🏷️ Note Categories

Each note can be assigned to one of four categories:

* 📚 Study
* 💼 Work
* 👤 Personal
* 📌 Others

---

## 💾 Data Persistence

Quick Notes uses the browser's **localStorage** to save notes.

Whenever notes are added, edited, pinned, or deleted, the updated notes are stored in localStorage.

This allows the notes to remain available even after refreshing the browser.

---

## 🔍 Search & Filtering

The application provides two ways to find notes:

### Search

Users can search notes by their **title**.

### Category Filter

Users can filter notes based on:

* All Categories
* Study
* Work
* Personal
* Others

There is also a **Clear Filters** option to reset the search and category filter.

---

## 📌 Pinning Notes

Users can pin important notes.

Pinned notes are automatically displayed before unpinned notes, making important information easier to access.

---

## ✏️ Editing Notes

When the user selects **Edit**, the selected note's information is loaded back into the form.

The user can modify:

* Title
* Content
* Category

The **Add Note** button changes to **Update Note** while editing.

A **Cancel Edit** option is also provided.

---

## 📊 Note Statistics

The application displays three statistics:

| Statistic   | Description              |
| ----------- | ------------------------ |
| Total Notes | Total number of notes    |
| Pinned      | Number of pinned notes   |
| Unpinned    | Number of unpinned notes |

---

## 🎨 Design

The application uses **Bootstrap** for responsive layouts and UI utilities, along with custom CSS for the overall visual design.

The project uses a warm and modern color palette with:

* Ivory background
* Dark typography
* Lavender accents
* Coral highlights
* Mint details

The interface is designed to work across desktop and mobile screen sizes.

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate into the project

```bash
cd quick-notes
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Bootstrap

```bash
npm install bootstrap
```

### 5. Start the development server

```bash
npm run dev
```

Open the localhost URL displayed in the terminal.

---

## 🚀 How It Works

```text
             Quick Notes
                  │
                  ▼
             Create Note
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
      Add Note           Edit Note
        │                   │
        └─────────┬─────────┘
                  ▼
             Notes List
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
     Search      Filter     Pin
       │          │          │
       └──────────┼──────────┘
                  ▼
            Manage Notes
                  │
          Edit / Delete /
             Clear All
```

---

## 🎯 Project Objective

The main objective of this project was to strengthen my understanding of **React fundamentals** by building a functional note-taking application.

Through this project, I practiced managing state, handling events, rendering dynamic data, working with arrays, implementing conditional rendering, persisting data using localStorage, and creating a responsive user interface with Bootstrap and CSS.

---

## 🔮 Future Improvements

Some features that could be added in the future:

* 🌙 Dark mode
* 🔐 User authentication
* ☁️ Backend integration
* 🗄️ MongoDB database
* 📤 Export notes
* 🔔 Note reminders
* 🏷️ Custom categories
* 🔄 Drag-and-drop note organization
* ☁️ Cloud synchronization

---

## 👩‍💻 Author

**Harini G**

Aspiring Full Stack Developer

This project was created as part of my journey in learning **React and Full Stack Development**.
