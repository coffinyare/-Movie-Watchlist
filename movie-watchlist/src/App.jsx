import React, { useState, useEffect  } from "react";
import  MovieItem from "./components/MovieItem";
import FilterButtons from "./components/FilterButtons";
import SearchBar from "./components/SearchBar";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const[name, setName]=useState("")
  const[search, setSearch] = useState("")
  const[filter, setFilter] = useState("all")
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


    useEffect(() => {
      localStorage.setItem(
        "movies",
        JSON.stringify(lists)
      );
    }, [lists]);


  

  

  function handleChange(event){
    const newName= event.target.value
    setName(newName)
  }

  function handleAdd(event){
    event.preventDefault();
    if(name.trim()=== ""){
      return;
    }
    setLists((prevLists)=>{
      return[
        ...prevLists,{
          id: Date.now(),
          name: name,
          completed: false,
        }
      ]
      
    })
    setName("")
  }

  function handleToggle(id){
    setLists((prevLits)=>{
      return prevLits.map((list)=>{
        if (list.id === id){
          return{
            ...list,
            completed: !list.completed,
          }
        }
        return list;
      })
    })
  }
  function handleDelete(id){
    setLists((prevLists)=>{
      return prevLists.filter((list)=>{
        return list.id !== id;
      })
    })
  }

  const filteredLists = lists.filter((list) => {
    const searchMovie= list.name.toLowerCase().includes(search.toLowerCase());
    if(filter === "all"){
      return searchMovie;
    }
    if(filter === "watched"){
      return list.completed && searchMovie;
    }
    if(filter === "unwatched"){
      return !list.completed && searchMovie;
    }
    return searchMovie;

  })
  return(
    <>

      <h1>🎬 Movie Watchlist</h1>
       <FilterButtons
         filter={filter}
         setFilter={setFilter}
        />
      <SearchBar
        search={search}
        setSearch={setSearch}
       />
       <AddMovie 
        handleAdd={handleAdd}
        name={name}
        handleChange={handleChange}
       />

      {filteredLists.map((list)=>{
        return <MovieItem key={list.id} list={list} handleToggle={handleToggle} handleDelete={handleDelete} />;
      })}
    </>
)  
}
export default App;