import { useState, useEffect } from "react";
import axios from "axios";
import { useReducer } from "react";
import {reducer1} from "./reducer/reducer1"

function App() {
  const [data, datadispatch] = useReducer(reducer1, {
    data:[],
    isError:false,
    isLoading:false
  });
  
  const dataUrl = "https://jsonplaceholder.typicode.com/posts?_limit=10"

  const getPostsData = async() => {
    
    try {
      datadispatch({type:"FETCH_INIT"});
      const response = await fetch(dataUrl);
      const result = await response.json();
      datadispatch({type: "FETCH_SUCCESS", payload: result})
      console.log(data.data);
    } catch (error) {
      datadispatch({type: "FETCH_ERROR"});
    }

  };

  useEffect(()=>{
    getPostsData();
  }, [])

  

  return (
    <div className="App">
      <h1>React Lab 6</h1>
      <p className="msg">
        {data.isError && <dev>something went wrong</dev>}
        {data.isLoading && <dev>Loading....</dev>}
        {data.data.map((obj, i)=>{
          return <p key = {i} className = "iwatanijumpei">{obj.title}</p  >
        })}
      </p>
      <button className="btn" onClick={() => getPostsData()}>Refetch</button>
    </div>
  );
}

export default App;
