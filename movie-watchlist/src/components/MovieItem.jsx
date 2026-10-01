import React from "react";
function MovieItem({ handleToggle, handleDelete, list }) {
  return (
      <p key={list.id}>  
          <input type="checkbox" 
          checked={list.completed} 
          onChange={( )=> handleToggle(list.id)} />   
          {list.name}
          <button onClick={()=>handleDelete(list.id)}>Delete</button>
          </p>
  )

}
export default MovieItem;