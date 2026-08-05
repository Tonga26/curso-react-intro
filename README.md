# 📝 Todo Machine

> A React learning project focused on mastering component-based architecture, state management, custom hooks, and modern frontend development practices.

![Status](https://img.shields.io/badge/Status-In_Progress-orange)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS-BEM-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📖 About the Project

Todo Machine is a personal learning project developed while studying the React ecosystem.

Rather than building a production-ready task manager from day one, the goal of this repository is to **document my learning journey** by progressively implementing React concepts, improving the application's architecture, and adopting frontend best practices.

Each completed feature represents a new milestone in my understanding of React, making this repository both a functional application and a record of my growth as a software developer.

---

## 📸 Preview

<p align="center">
  <img src="./assets/preview.png" alt="Todo Machine Preview" width="300"/>
</p>

---

## ✨ Current Features

- ✅ Create and manage TODO items
- ✅ Mark tasks as completed
- ✅ Delete existing tasks
- ✅ Search tasks in real time
- ✅ Dynamic task statistics
- ✅ Persistent data using Local Storage
- ✅ Responsive and component-based user interface
- ✅ SVG icon components with reusable architecture

---

## ⚛️ React Concepts Practiced

Throughout this project I have been implementing and reinforcing the following React concepts:

### Fundamentals

- Functional Components
- JSX
- Component Composition
- Props
- Event Handling

### State Management

- `useState`
- Derived State
- Controlled Components
- Conditional Rendering

### Rendering

- Rendering Lists
- Dynamic CSS Classes
- Reusable Components

### Reusability

- Custom Hooks
- Component Separation
- SVG Components
- Separation of Concerns

### Browser APIs

- Local Storage
- Data Persistence

---

---

## 🏗️ Project Structure

```text
src/
│
├── App/
│   ├── AppUI.js
│   ├── index.js
│   └── useLocalStorage.js
│
├── CreateTodoButton/
│   ├── index.js
│   └── CreateTodoButton.css
│
├── EmptyTodos/
│   ├── index.js
│   └── EmptyTodos.css
│
├── TodoCounter/
│   ├── index.js
│   └── TodoCounter.css
│
├── TodoItem/
│   ├── index.js
│   └── TodoItem.css
│
├── TodoList/
│   ├── index.js
│   └── TodoList.css
│
├── TodoSearch/
│   ├── index.js
│   └── TodoSearch.css
│
├── TodoError/
│   ├── index.js
│   └── TodoError.css
│
├── TodoLoading/
│   ├── index.js
│   └── TodoLoading.css
│
├── TodoIcon/
│   ├── index.js
│   ├── CompleteIcon.js
│   ├── DeleteIcon.js
│   ├── check.svg
│   ├── delete.svg
│   └── TodoIcon.css
│
├── index.css
└── index.js
```

Each component lives inside its own directory, keeping its implementation and styles together. This organization improves maintainability, simplifies navigation, and makes the project easier to scale as new features are added.

The application follows a **component-based architecture**, where each UI element has a single responsibility, making the code easier to maintain, understand, and extend.

---

## 🛠️ Technologies

- **React 18**
- **JavaScript (ES6+)**
- **CSS3** (BEM Methodology)
- **Create React App**
- **Local Storage API**

---

## 💡 What I Learned

This project helped me understand how to build user interfaces by thinking in **reusable components** instead of pages.

While developing Todo Machine, I practiced React fundamentals such as state management, component composition, custom hooks, conditional rendering, and data persistence, reinforcing the importance of writing clean, maintainable, and scalable code.

---

## 🗺️ Learning Roadmap

- ✅ Component-based architecture
- ✅ Props and state management
- ✅ Event handling
- ✅ Conditional rendering
- ✅ Lists and dynamic rendering
- ✅ Custom Hooks
- ✅ Local Storage persistence
- ✅ `useEffect` and Component Lifecycle

### Next Steps

- 🔄 React Context API
- 🔄 React Portals
- 🔄 Forms
- 🔄 Performance optimization
- 🔄 Migration to Vite

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/Tonga26/curso-react-intro.git
```

Navigate to the project:

```bash
cd curso-react-intro
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open your browser at:

```
http://localhost:3000
```

---

## 👨‍💻 About This Repository

This repository is part of my journey learning React.

Instead of treating it as a one-time course project, I use it as a place to progressively apply new concepts while improving the codebase, architecture, and development practices.

The objective is to document my learning process through consistent commits and incremental improvements, following the same mindset used in real-world software development.