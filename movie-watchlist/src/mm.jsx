import React, { useState, useEffect  } from "react";
import "./App.css";

function App() {
  const[name, setName]=useState("")
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
    }
  ];
});
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");



  
  function handleChange(event) {
    const newname=event.target.value;
    setName(newname);
      
    }
useEffect(() => {
  localStorage.setItem("movies", JSON.stringify(lists));
}, [lists]);

    function handleAdd(event) {
      event.preventDefault()
      setLists((prevList)=>{
        return [
          ...prevList,{
            id: Date.now(),
            name:name,
            completed: false,


          }

        ]
          
        
      })
     setName("")

    }


    function handleToggle(id) {
      setLists((prevList)=>{
        return prevList.map((list)=>{
          if(list.id === id){
            return{
              ...list,
              completed: !list.completed,

            }
          }
          return list;
        })
      })
    }

    function handleDelete(id) {
      setLists((prevList)=>{
        return prevList.filter((list)=>{
          return list.id !== id;
        })
      })
    }

const filteredMovies=lists.filter((movie)=>{
  const matchesSearch= movie.name
  .toLowerCase()
  .includes(search.toLowerCase())
  if(filter === "all"){
    return matchesSearch;
  }
   if(filter === "watched"){
    return movie.completed === true && matchesSearch;
  }
   if(filter === "unwatched"){
    return movie.completed === false && matchesSearch;
  }
   return matchesSearch;

})

const watchedCount = lists.filter((movie) => {
  return movie.completed === true;
}).length;
const unWatchedCount = lists.filter((movie) => {
  return movie.completed === false;
}).length;
const allCount  = lists.length;

    

  return(
    <>
    <h1>🎬 Movie Watchlist</h1>
    <form onSubmit={handleAdd}>
      <input
       type="text"
       placeholder="Search movie..."
       value={search}
       onChange={(event) => setSearch(event.target.value)}
      />
      <button type="button" onClick={() => setFilter("all")}>
       All ({allCount})
      </button>
      <button type="button" onClick={() => setFilter ("watched")}>
       Watched ({watchedCount})
      </button>
      <button type="button" onClick={() => setFilter ("unwatched")}>
       Unwatched ({unWatchedCount})
      </button>
      <input onChange={handleChange} type="text" placeholder="Enter movie name..." value={name} />
      <button type="submit" >Add</button>
    </form>

    {
      filteredMovies.map((movie)=>{
        return <p key={movie.id}>
          
          <input type="checkbox" 
          checked={movie.completed} 
          onChange={()=> handleToggle(movie.id)}/>
          {movie.name}
          <button type="button" onClick={()=> handleDelete(movie.id)}> DELETE</button>
          
          </p>
          
      })
    }





    </>
      )
  
}
export default App;