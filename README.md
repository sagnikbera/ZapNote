# 📝 NoteIt - A React Notes App

**NoteIt** is a modern note-taking web application built with **React**, designed for simplicity and productivity. It supports creating, editing, pinning, archiving, and deleting notes — just like your favorite productivity apps!

---

## 🚀 Features

- ✅ Add, edit, and delete notes
- 📌 Pin/unpin important notes
- 📂 Archive and unarchive notes
- 🗑️ Move notes to Bin (Trash) and restore them
- 🌙 Dark/light mode support
- 🧹 Auto-clears input fields after adding notes
- 🎯 Modular architecture with clean, reusable components

---

---

## 🛠️ Tech Stack

- **React** with Hooks & Context API
- **Tailwind CSS** for responsive UI styling
- **UUID** for generating unique note IDs
- **React Icons** for intuitive iconography

---

## 📁 Project Structure

````bash
src/
│
├── components/           # Reusable UI components (NoteCard, NavBar, SideBar, etc.)
├── contexts/             # Global state using Context API
│   └── notes-context.jsx
├── pages/                # App pages (Home, Bin, Archive, Important)
├── reducers/             # noteReducer logic for state transitions
├── App.jsx               # Main component with routes
└── index.js              # ReactDOM entry point
```

---

## 📦 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/sagnikbera/ZapNote.git
   cd ZapNote
    ```
2. **Install dependencies**
```bash
npm install
````

3. **Start the app**

```bash
npm run dev
```
