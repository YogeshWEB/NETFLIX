import { useEffect, useState } from "react";



const key = "Bearer "+import.meta.env.REACT_APP_API_ACCESS_TOKEN;


function Data() {
 const [posts,setPosts]=useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setPosts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  return (
    <div >             
          {posts.map((val)=>{
           return  <li key={val.id}>{val.body}</li>
          })}        
    </div>
  )
}

export default Data







