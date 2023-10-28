"use client";
import React,{useState} from "react";

const page=()=>
{
  const [title,settitle]=useState("");
  const [desc,setdesc]=useState("");
  const [maintask,setmaintask]=useState([]);
  const click=(e)=>
  {
    e.preventDefault();
    setmaintask([...maintask,{title,desc}]);
    console.log(maintask);
    settitle("");
    setdesc("");
  }

  const delrec=(i)=>
  {
    let copy=[...maintask];
    copy.splice(i,1);
    setmaintask(copy);
  }
  

  let rendertask=<h1 id="no">No Task Added</h1>;

  if(maintask.length>0)
  {
    rendertask=maintask.map((val,i)=>
    {
        return <li id="content">
          <div id="tas">
            <h1>{val.title}</h1>
            <h5>{val.desc}</h5>
          </div>
          <button id="delete" onClick={()=>
          {
            delrec(i);
          }}>Delete</button>
        </li>;
    })
  }
  return(
    <>
      <h1 id="head">My ToDo-List</h1>
      <form>
        <input id="title" placeholder="Enter Title" type="text" value={title} onChange={(e)=>
        {
            settitle(e.target.value);
        }}/>

        <input id="des" placeholder="Enter Description" type="text" value={desc} onChange={(e)=>
        {
          setdesc(e.target.value);
        }}/>
        <button onClick={click}>Add Me</button>
      </form>
      <hr/>
        <ul>{rendertask}</ul>
      
    </>
  )
}

export default page

// echo "# todolist" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Vishnu-0609/todolist.git
// git push -u origin main