import React, { Component } from "react";
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link, Navigate } from "react-router-dom";

export default class AddPage extends Component {
  state = {
    userId: "",
    title: "",
    description: "",
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    var title=this.state.title;
    var userId=this.state.userId;
    var body=this.state.description;
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
      alert("Post Added Successfully");
  };

  handleUserID = (e) => {
    this.setState({ userId: e.target.value });
  };

  handleTitle = (e) => {
    this.setState({ titlerId: e.target.value });
  };

  handleDes = (e) => {
    this.setState({ description: e.target.value });
  };
  render() {
    console.log("post", this.state.userId);
    const isLoading = this.state.isLoading;
    return (
      <div>
        <Header />
        <div id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper">
            <div className="container-fluid">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Add Post </li>
              </ol>
            </div>
            <div className="container-fluid">
              <div className="card mx-auto">
                <div className="card-header"> Add Post</div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="inputID"
                              className="form-control"
                              placeholder="Enter name"
                              required="required"
                              autoFocus="autofocus"
                              onClick={this.handleUserID}
                            />
                            <label htmlFor="inputID">Enter User ID</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="inputTitle"
                              className="form-control"
                              placeholder="Email address"
                              required="required"
                              onClick={this.handleTitle}
                            />
                            <label htmlFor="inputTitle">
                              Enter the Title of the Post
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <div className="form-label-group">
                              <input
                                type="text"
                                id="inputDescription"
                                className="form-control"
                                placeholder="Enter Emp ID"
                                required="required"
                                onClick={this.handleDes}
                              />
                              <label htmlFor="inputDescription">
                                Enter Post Description
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-6">
                          <button
                            className="btn btn-primary btn-block"
                            type="submit"
                            disabled={this.state.isLoading ? true : false}
                          >
                            Submit Post &nbsp;&nbsp;&nbsp;
                            {isLoading ? (
                              <span
                                className="spinner-border spinner-border-sm"
                                role="status"
                                aria-hidden="true"
                              ></span>
                            ) : (
                              <span></span>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <footer className="sticky-footer">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © Raksha ChandraShekar 2022</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
