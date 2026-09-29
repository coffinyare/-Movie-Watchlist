import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  // =========================
  // STATES
  // =========================

  const [name, setName] = useState("");

  const [lists, setLists] = useState(() => {
    const savedMovies = localStorage.getItem("movies");

    if (savedMovies) {
      return JSON.parse(savedMovies);
    }

    return [
      {
        id: 1,
        name: "prison break",
        completed: true,
      },
      {
        id: 2,
        name: "daha 17",
        completed: false,
      },
    ];
  });

  const [filter, setFilter] = useState("all");

  const [search, setSearch] = useState("");


  // =========================
  // HANDLE CHANGE
  // =========================

  function handleChange(event) {
    const newname = event.target.value;

    setName(newname);
  }


  // =========================
  // ADD MOVIE
  // =========================

  function handleAdd(event) {
    event.preventDefault();

    setLists((prevList) => {
      return [
        ...prevList,
        {
          id: lists.length + 1,
          name: name,
          completed: false,
        },
      ];
    });

    setName("");
  }


  // =========================
  // TOGGLE MOVIE
  // =========================

  function handleToggle(id) {
    setLists((prevList) => {
      return prevList.map((list) => {

        if (list.id === id) {
          return {
            ...list,
            completed: !list.completed,
          };
        }

        return list;
      });
    });
  }


  // =========================
  // DELETE MOVIE
  // =========================

  function handleDelete(id) {
    setLists((prevList) => {
      return prevList.filter((list) => {
        return list.id !== id;
      });
    });
  }


  // =========================
  // LOCAL STORAGE
  // =========================

  useEffect(() => {
    localStorage.setItem(
      "movies",
      JSON.stringify(lists)
    );
  }, [lists]);


  // =========================
  // FILTER + SEARCH
  // =========================

  const filteredMovies = lists.filter((movie) => {

    const matchesSearch = movie.name
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "all") {
      return matchesSearch;
    }

    if (filter === "watched") {
      return movie.completed === true && matchesSearch;
    }

    if (filter === "unwatched") {
      return movie.completed === false && matchesSearch;
    }

    return matchesSearch;
  });


  // =========================
  // COUNTS
  // =========================

  const watchedCount = lists.filter((movie) => {
    return movie.completed === true;
  }).length;

  const unWatchedCount = lists.filter((movie) => {
    return movie.completed === false;
  }).length;

  const allCount = lists.length;


  // =========================
  // WEBSITE
  // =========================

  return (
    <div className="app">

      <h1>🎬 Movie Watchlist</h1>


      {/* SEARCH */}

      <input
        className="search"
        type="text"
        placeholder="Search movie..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />


      {/* FILTERS */}

      <div className="filters">

        <button
          type="button"
          onClick={() => setFilter("all")}
        >
          All ({allCount})
        </button>

        <button
          type="button"
          onClick={() => setFilter("watched")}
        >
          Watched ({watchedCount})
        </button>

        <button
          type="button"
          onClick={() => setFilter("unwatched")}
        >
          Unwatched ({unWatchedCount})
        </button>

      </div>


      {/* ADD MOVIE */}

      <form
        className="add-form"
        onSubmit={handleAdd}
      >

        <input
          type="text"
          placeholder="Enter movie name..."
          value={name}
          onChange={handleChange}
        />

        <button type="submit">
          Add
        </button>

      </form>


      {/* MOVIE LIST */}

      <div className="movie-list">

        {filteredMovies.map((movie) => {

          return (
            <div
              className="movie"
              key={movie.id}
            >

              <label>

                <input
                  type="checkbox"
                  checked={movie.completed}
                  onChange={() =>
                    handleToggle(movie.id)
                  }
                />

                <span
                  className={
                    movie.completed
                      ? "completed"
                      : ""
                  }
                >
                  {movie.name}
                </span>

              </label>


              <button
                className="delete"
                type="button"
                onClick={() =>
                  handleDelete(movie.id)
                }
              >
                Delete
              </button>

            </div>
          );

        })}

      </div>

    </div>
  );
}

export default App;