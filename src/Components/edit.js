import React, { Component } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";

export default class EditPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    id: "",
    title: "",
    body: "",
    redirect: false,
    isLoading: false,
  };
  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => console.log(response));
  }

  handleSubmit = (event) => {
    var id=this.state.id;
    var title=this.state.title;
    var body=this.state.body;
    fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        title: title,
        body: body,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Navigate to="/dashboard" />;
    }
  };

  render() {
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
                <li className="breadcrumb-item active">Edit</li>
              </ol>
            </div>
            <div className="container-fluid">
              <div className="card mx-auto">
                <div className="card-header">Post Edit</div>
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
                  <span>Copyright © Your Website 2019</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}
