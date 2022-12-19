import React, { useState,useEffect } from "react";
import "./searchBar.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Components/redux/Reducers/postReducer";



export function SearchBar({ placeholder, data }) {

  // const dataPost = useSelector((state) => state.postRed.post);
  // const dispatch = useDispatch();
  const [filterData, setFilteredData] = useState([]);

  const[wordEntered,setWordEntered]=useState("");

  const handlerFilter = (e) => {
    const searchWord = e.target.value;
     setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if(searchWord===""){
      setFilteredData([])
    }
    setFilteredData(newFilter);
   
  };

  // useEffect(() => {
  //   dispatch(fetchPosts());
  // }, []);


  const clearData=()=>{
    setFilteredData([]);
    setWordEntered("");
  }

  return (
    <div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder={placeholder}
          value={wordEntered}
          aria-label="Search"
          aria-describedby="basic-addon2"
          onChange={handlerFilter}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">
            <i className="fas fa-search"/>{filterData.length===0 ? (<i class="fa-thin fa-magnifying-glass"></i>): (<i class="fa-thin fa-xmark" id="clearBtn" onClick={clearData}></i>)
            }
          </button>
        </div>
      </div>
      {filterData.length !=0 && ( 
         <div className="dataResult">
         {filterData.slice(0,15).map((value, key) => {
             return (
               <>
                 <a className="dataItem" hef={value} target="_blank" />
                 <p ><span style={{color:'red'}}>Title:</span> {value.title}</p>
                 {value.body ?<p> <span style={{color:'red'}}>Body: </span> {value.body}</p> :<p> <span style={{color:'red'}}>Category: </span> {value.description}</p>}
               </>
             );
           })}
       </div>
       )}
     
    </div>
  );
}
