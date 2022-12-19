/* Component for Getting data for the table*/
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Components/redux/Reducers/postReducer";
import { SearchBar } from "../Components/searchBar";

export default function PostTable() {
  const dataPost = useSelector((state) => state.postRed.post);
  const dispatch = useDispatch();

  const deletePost = (id) => {
    console.log("index", id);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => console.log(res));
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const rowData =  dataPost.sort((a,b)  =>a.userId>b.userId?1:-1).map((item, key) => {
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.userId}</td>
        <td>{item.title}</td>
        <td>{item.body}</td>
        <td>
          {" "}
          <Link className="d-block small mt-3" to={`/editPost/${item.id}`}>
            Edit
          </Link>
        </td>

        <button
          padding="10px"
          margin="10px"
          className="btn btn-primary btn-block"
          onClick={deletePost(item.id)}
        >
          Delete
        </button>
      </tr>
    );
  });

  console.log("data ij pres", dataPost);

  return (
    <div>
      <ol className="breadcrumb">
        <li className="breadcrumb-item"> </li>
        <li className="mr-auto">
          <SearchBar placeholder="Enter a Post Name..." data={dataPost}/>
        </li>

        <li className="ml-auto">
          <Link to={"/addPost"}>Add New Post</Link>
        </li>
      </ol>
      <div className="table-responsive">
        <table
          className="table table-bordered"
          id="dataTable"
          width="100%"
          cellSpacing="2"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
          </thead>
          {rowData}
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}
