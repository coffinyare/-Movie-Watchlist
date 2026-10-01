import React, { useState } from "react";
function AddMovie({ handleAdd, name, handleChange }) {
  return(
    <form onSubmit={handleAdd}>
        <input onChange={handleChange} 
        type="text" placeholder="Enter movie name..." 
        value={name} />
        <button type="submit">Add</button>
      </form>
  )

}
export default AddMovie;