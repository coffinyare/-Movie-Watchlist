# 🎬 Movie Watchlist

A simple and modern **Movie Watchlist** built with **React.js** and **Vite**.

This project allows users to add movies, search for movies, mark movies as watched or unwatched, delete movies, and filter their watchlist.

## 🚀 Features

* ➕ Add new movies
* 🔍 Search movies
* ☑️ Mark movies as watched
* ⬜ Mark movies as unwatched
* 🗑️ Delete movies
* 🎯 Filter movies:

  * All
  * Watched
  * Unwatched
* 💾 Save movies using `localStorage`
* 🎨 Modern and responsive UI
* 🧩 Organized React components

## 🛠️ Technologies

* React.js
* JavaScript
* Vite
* HTML
* CSS
* LocalStorage

## 📁 Project Structure

```text
movie-watchlist/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── MovieItem.jsx
│   │   ├── FilterButtons.jsx
│   │   ├── AddMovie.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go into the project folder:

```bash
cd movie-watchlist
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in your terminal.

## 💡 How It Works

Movies are stored in React state and automatically saved to the browser's `localStorage`.

When a movie is marked as watched, its `completed` value changes:

```javascript
completed: true
```

When it is unwatched:

```javascript
completed: false
```

The filter system uses these values to display the correct movies.

## 📚 What I Learned

While building this project, I practiced:

* React `useState`
* React `useEffect`
* Components
* Props
* Event handling
* `.map()`
* `.filter()`
* Spread operator
* Conditional rendering
* `localStorage`
* Component organization
* CSS styling

## 👨‍💻 Author

**Mohamed**

Junior Full-Stack Developer learning and building projects with React and JavaScript.

---

⭐ If you like this project, feel free to explore the code and improve it!


<img width="708" height="817" alt="Screenshot 2026-10-01 130901" src="https://github.com/user-attachments/assets/b4ca0694-3e54-44bb-ad62-2031c7c57cfc" />
<img width="651" height="886" alt="Screenshot 2026-10-01 130849" src="https://github.com/user-attachments/assets/16ab15ae-df65-4a2a-bab5-3752486a1e7c" />
<img width="631" height="857" alt="Screenshot 2026-10-01 130831" src="https://github.com/user-attachments/assets/c6f35e7c-ad03-4796-8b3e-10767bd1ec1f" />
<img width="635" height="922" alt="Screenshot 2026-10-01 130817" src="https://github.com/user-attachments/assets/84320e55-04bb-4ae8-ac8c-2bca18037b18" />
