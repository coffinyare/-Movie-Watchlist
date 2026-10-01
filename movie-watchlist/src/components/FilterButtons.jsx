import React from "react";

function FilterButtons({ filter, setFilter, search, setSearch }) {
  return (
    <div className="filters">
      <button
        type="button"
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        All
      </button>

      <button
        type="button"
        className={filter === "watched" ? "active" : ""}
        onClick={() => setFilter("watched")}
      >
        Watched
      </button>

      <button
        type="button"
        className={filter === "unwatched" ? "active" : ""}
        onClick={() => setFilter("unwatched")}
      >
        Unwatched
      </button>

    </div>
  );
}

export default FilterButtons;
