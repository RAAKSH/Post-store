/* Component for Getting data for the table*/
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../Components/redux/Reducers/productReducer";
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { SearchBar } from "../Components/searchBar";

export default function ProductTable() {
  const dataProduct = useSelector((state) => state.productRed.product);
  const dispatch = useDispatch();

  const deletePost = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => console.log(res));
  };

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  const rowData =  dataProduct.sort((a,b)=>a.price<b.price?1:-1).map((item, key) => {
    return (
      <div class="col-sm-4">
        <div class="card">
          <img class="card-img-top" src={item.image} alt="Card image cap" />
          <div class="card-body">
            <h4 class="card-title">{item.title}</h4>
            <h5 class="card-title">{item.category}</h5>
            <p class="card-text">{item.description}</p>
            <span class="badge badge-info">{item.price}</span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Header />
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper">
          <div className="container-fluid">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
             
              <li className="breadcrumb-item active">Products</li>
              <li className="ml-auto">
                <SearchBar placeholder="Enter a Product Name..." data={dataProduct} />
              </li>
            </ol>

            <div className="card mb-3">
              <div className="card-header">
                <i className="fas fa-table"></i>
                &nbsp;&nbsp;Products
              </div>
              <div className="card-body">
                <div class="row">{rowData}</div>
              </div>
              <div className="card-footer small text-muted">
                Updated yesterday at 11:59 PM
              </div>
            </div>
          </div>
          <footer className="sticky-footer">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright @Raksha 2022</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
