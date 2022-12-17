/* Component for Getting data for the table*/
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PostTable() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=15")
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  const deletePost = (id) => {
    console.log("index", id);

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => console.log(res));

    
  
  };

  const rowData = post.map((item, key) => {
    console.log("items", item);
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
  return (
    <div>
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
